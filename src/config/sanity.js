import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "9lmatc90",
  dataset: "production", //
  useCdn: true,
  apiVersion: "2023-09-28",
  token: import.meta.env.SANITY_TOKEN,
});

export async function fetchAuthors() {
  const query = '*[_type == "author"]';
  const authors = await sanityClient.fetch(query);
  return authors;
}
export async function fetchBlogPosts() {
  const query = '*[_type == "post"]';
  const posts = await sanityClient.fetch(query);
  return posts;
}
