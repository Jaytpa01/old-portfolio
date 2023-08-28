/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				slattery_orange: {
					100: "#E7773A",
				},
			},
		},
	},
	plugins: [require("daisyui")],
};
