import type { ImageMetadata } from "astro";
import { z, defineCollection } from "astro:content";

interface ProjectSchemaParams {
	image: () => any;
}

const projectSchema = ({ image }: ProjectSchemaParams) =>
	z.object({
		title: z.string(),
		description: z.string().optional(),
		publishDate: z.coerce.date().optional(),
		tags: z.array(z.string()).optional(),
		image: image().optional(),
	});

const project = defineCollection({
	type: "content",
	schema: projectSchema,
});

export const collections = {
	project,
};
