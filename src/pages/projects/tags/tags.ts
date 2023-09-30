import { getCollection } from "astro:content";

export default async function getAllProjectsAndTags() {
	const projects = await getCollection("project");
	const tags = [
		...new Set(
			projects
				.map((p) => p.data.tags?.map((t) => t.toLowerCase()) || "") // all tags lowercased
				.flat()
				.filter((t) => !!t), // filter out falsy tags
		),
	];

	return {
		projects,
		tags,
	};
}
