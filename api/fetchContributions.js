import { fetchContributionsData } from "../server/contributionsHandler.js";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  const { status, body } = await fetchContributionsData(request.body ?? {});
  return response.status(status).json(body);
}
