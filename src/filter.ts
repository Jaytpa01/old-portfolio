import type { CollectionEntry } from "astro:content";

export function filterDraftArticles({
	data,
}: CollectionEntry<"blog" | "project">) {
	return import.meta.env.PROD ? data.status !== "draft" : true;
}
