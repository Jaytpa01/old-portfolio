import type { ImageMetadata } from "astro";
import { z, defineCollection } from "astro:content";

interface ArticleSchemaParams {
	image: () => any;
}

const articleSchema = ({ image }: ArticleSchemaParams) =>
	z.object({
		title: z.string(),
		description: z.string().optional(),
		publishDate: z.coerce.date().optional(),
		tags: z.array(z.string().toLowerCase()).optional(),
		image: image().optional(),
	});

const project = defineCollection({
	type: "content",
	schema: articleSchema,
});

const blog = defineCollection({
	type: "content",
	schema: articleSchema,
});

export const collections = {
	project,
	blog,
};

export const PAGE_SIZE = 2;
