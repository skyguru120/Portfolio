import axios from "axios";

const generatePRQuery = (repos, username, limit) => {
  const queries = repos
    .map((repo) => `repo:${repo} is:pr author:${username}`)
    .join(" ");

  return `
    query {
      search(query: "${queries}", type: ISSUE, first: ${limit}) {
        nodes {
          ... on PullRequest {
            id
            title
            state
            number
            createdAt
            url
            additions
            deletions
          }
        }
      }
    }
  `;
};

const parseOriginFromUrl = (url) => {
  const [, ...parts] = url.split(/https:\/\/|\//gm);
  const organization = parts[1];
  const repo = parts[2];
  const logoUrl = `https://github.com/${organization}.png`;

  return { organization, repo, logoUrl };
};

export async function fetchContributionsData({
  repos = [],
  username,
  limit = 20,
} = {}) {
  const token = process.env.GH_TOKEN || process.env.VITE_GH_TOKEN;
  if (!token) {
    return {
      status: 503,
      body: { error: "GitHub token is not configured" },
    };
  }

  try {
    const query = generatePRQuery(repos, username, limit);

    const githubResponse = await axios.post(
      "https://api.github.com/graphql",
      { query },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const pullRequests = githubResponse.data?.data?.search?.nodes ?? [];
    const formattedPRs = pullRequests.map((item) => {
      const { organization, repo, logoUrl } = parseOriginFromUrl(item.url);
      return {
        id: item.id,
        organization,
        logoUrl,
        repo,
        status: item.state,
        title: item.title,
        link: item.url,
        number: item.number,
        date: new Date(item.createdAt).toLocaleDateString(),
        linesAdded: item.additions,
        linesDeleted: item.deletions,
      };
    });

    return { status: 200, body: formattedPRs };
  } catch (error) {
    console.error("fetchContributions error:", error.message);
    return {
      status: 500,
      body: { error: "Failed to fetch contributions" },
    };
  }
}

export function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

export function createContributionsMiddleware() {
  return async (req, res, next) => {
    if (req.method === "OPTIONS") {
      res.statusCode = 204;
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.end();
      return;
    }

    if (req.method !== "POST") {
      res.statusCode = 405;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Method not allowed" }));
      return;
    }

    try {
      const payload = await readJsonBody(req);
      const { status, body } = await fetchContributionsData(payload);

      res.statusCode = status;
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(JSON.stringify(body));
    } catch {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Failed to fetch contributions" }));
    }
  };
}
