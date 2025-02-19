/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#2563eb',
        'secondary': '#1e293b',
        'background': '#0f172a',
        'text': '#e2e8f0'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: '#e2e8f0',
            a: {
              color: '#2563eb',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            h1: {
              color: '#e2e8f0',
            },
            h2: {
              color: '#e2e8f0',
            },
            h3: {
              color: '#e2e8f0',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
