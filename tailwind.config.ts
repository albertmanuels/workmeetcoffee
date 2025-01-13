import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(320px, 1fr))'
      },
			colors: {
				base1: "#FAF7F0",
				base2: "#B17457",
			},
			minHeight: {
				'desktop': "calc(100vh - 76px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	},
};

export default config;
