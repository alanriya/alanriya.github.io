module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: '#0b1220',
        panel: '#111a2e',
        accent: { DEFAULT: '#0f766e', light: '#2dd4bf', dark: '#115e59' },
      },
    },
  },
  plugins: [],
}
