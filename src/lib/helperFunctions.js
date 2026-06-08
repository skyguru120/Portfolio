import axios from "axios";
import { aboutMe, itemsToFetch, includedRepos } from "../constants";

const CONTRIBUTIONS_ENDPOINT = "/api/fetchContributions";

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (!element) return;

  const yOffset = -70;
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export const normalizeExternalUrl = (url) => {
  const trimmed = url.trim();

  if (!trimmed) return "#";
  if (/^mailto:/i.test(trimmed)) return trimmed;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (trimmed.includes("@") && !trimmed.includes("/")) {
    return `mailto:${trimmed}`;
  }
  if (trimmed.startsWith("//")) return `https:${trimmed}`;
  return `https://${trimmed}`;
};

const parseOriginFromUrl = (url) => {
  const [, ...parts] = url.split(/https:\/\/|\//gm);
  const organization = parts[1];
  const repo = parts[2];
  const logoUrl = `https://github.com/${organization}.png`;

  return {
    organization,
    repo,
    logoUrl,
  };
};

export async function fetchContributionsWithRetry() {
  try {
    return await fetchContributions();
  } catch (error) {
    return {
      error: error.response?.data?.error || error.message || "Failed to fetch contributions",
    };
  }
}

export async function fetchContributions() {
  const payload = {
    repos: includedRepos,
    username: aboutMe.githubUsername,
    limit: itemsToFetch,
  };

  const response = await axios.post(CONTRIBUTIONS_ENDPOINT, payload, {
    validateStatus: () => true,
  });

  if (response.status >= 400) {
    const message =
      response.data?.error ||
      `Contributions API responded with status ${response.status}`;
    throw Object.assign(new Error(message), { response });
  }

  if (response.data?.error) {
    throw new Error(response.data.error);
  }

  return response.data;
}

export { parseOriginFromUrl };
