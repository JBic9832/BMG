/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary-blue": "#3882ff",
				"light": "#ffffff",
				"dark": "#27272a"
			},
			padding: {
				"small-padding": "16px",
				"medium-padding": "32px",
				"large-padding": "384px"
			},
		},
	},
	plugins: [],
}
