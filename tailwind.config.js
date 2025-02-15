
import { heroui } from "@heroui/react";


/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			'sans': ['ui-sans-serif', 'system-ui'],
			'serif': ['ui-serif', 'Georgia'],
			'mono': ['ui-monospace', 'SFMono-Regular'],
			'arvo': ["Arvo", "serif"],
			'gelasio': ["Gelasio", "serif"],
			"crimson": ["Crimson Text", "serif"],
			"gothic": ["Dela Gothic One", "sans-serif"],
			"days": ["Days One", "sans-serif"],
			"canon": ["IM Fell French Canon SC", "serif"],
		},
		colors: {
			white: '#eeeeee',
			black: '#242424',
			bgblack: "#232931",
			grey: '#F3F3F3',
			'dark-grey': '#6B6B6B',
			red: '#FF4E4E',
			transparent: 'transparent',
			twitter: '#1DA1F2',
			purple: '#8B46FF'
		},
		fontSize: {
			sm: '12px',
			lg: '14px',
			xl: '16px',
			'2xl': '20px',
			'3xl': '28px',
			'4xl': '32px',
			'5xl': '50px'
		},
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			aspectRatio: {
				'2/3': '2.2 / 3',
				'cateRatio': '2.5 / 3',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	darkMode: "class",
	plugins: [
		require('tailwind-scrollbar-hide'),
		heroui(),
		function ({ addUtilities }) {
			const newUtilities = {
				".noScrollbar::-webkit-scrollbar": {
					display: 'none'
				},
				".noScrollbar": {
					"-ms-overflow-style": "none",
					"scrollbar-width": "none"
				}
			}

			addUtilities(newUtilities)
		}

	],
};