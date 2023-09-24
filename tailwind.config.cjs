/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				slattery_orange: {
					100: "#E7773A",
				},
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	daisyui: {
		themes: [
			{
				personal: {
					primary: "#E7773A",
					secondary: "#263C38",
					accent: "#bf5218",
					neutral: "#d4d4d4",
					"base-100": "#ffffff",
					info: "#3abff8",
					success: "#36d399",
					warning: "#fbbd23",
					error: "#f87272",
				},
			},
			"light",
		],
	},
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
