/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}', './utils/**/*.{ts,tsx}'],
	darkMode: 'class',
	plugins: [require('@tailwindcss/typography')],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						// 기본 스타일 조정
						ol: {
							marginTop: 0,
							paddingLeft: '1.25rem', // 리스트의 왼쪽 여백
							marginBottom: '0.5rem', // 리스트 항목 간 간격
						},
						ul: {
							marginTop: 0,
							paddingLeft: '1.25rem',
							marginBottom: '0.5rem',
						},
						// 리스트 내부의 p 스타일 조정
						'ol p': {
							marginTop: '0.25rem', // 상단 여백
							marginBottom: '0.25rem', // 하단 여백
						},
						'ul p': {
							marginTop: '0.25rem',
							marginBottom: '0.25rem',
						},
						hr:{
							marginTop: "1.5rem",
							marginBottom: "1.5rem", 
						},
						pre: {
							marginTop: "1rem",
							marginBottom: "1rem",
						}
					},
				},
				dark: {
					css: { 
						'ol p': {
							marginTop: '0.25rem',
							marginBottom: '0.25rem',
						},
						'ul p': {
							marginTop: '0.25rem',
							marginBottom: '0.25rem',
						},
						"pre": {
							background: '#191A1B'
						}
					},
				},
			},

			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: 'hsl(var(--card))',
				'card-foreground': 'hsl(var(--card-foreground))',
				popover: 'hsl(var(--popover))',
				'popover-foreground': 'hsl(var(--popover-foreground))',
				primary: 'hsl(var(--primary))',
				'primary-foreground': 'hsl(var(--primary-foreground))',
				secondary: 'hsl(var(--secondary))',
				'secondary-foreground': 'hsl(var(--secondary-foreground))',
				muted: 'hsl(var(--muted))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
				accent: 'hsl(var(--accent))',
				'accent-foreground': 'hsl(var(--accent-foreground))',
				destructive: 'hsl(var(--destructive))',
				'destructive-foreground': 'hsl(var(--destructive-foreground))',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
			},
			borderRadius: {
				DEFAULT: 'var(--radius)',
			},
			fontFamily: {
				play: ['var(--font-play)'], // 사용자 정의 폰트 설정
				sans: ['ui-sans-serif', 'system-ui'], // 기본 폰트 설정
			},
		},
	},
};