/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#7886c0",
				secondary: "#82d0bf",
				tertiary: "#c1a286",
			},
		},
	},
	plugins: [],
};
