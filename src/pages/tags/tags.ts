import { getCollection } from "astro:content";

export async function getAllTags(): Promise<string[]> {
	const projects = await getCollection("project");
	const posts = await getCollection("blog");

	const projectTags = projects.map((p) => p.data.tags || []).flat();
	const postTags = posts.map((p) => p.data.tags || []).flat();

	const tags = [...new Set([...projectTags, ...postTags])]
		.filter((t) => !!t) // filter out falsy tags
		.sort();

	return tags;
}
