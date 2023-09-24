import { z, defineCollection } from "astro:content";

const projectSchema = ({ image }: { image: Function }) =>
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
