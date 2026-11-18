/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#050507',
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a24',
        },
        accent: {
          purple: '#a855f7',
          blue: '#3b82f6',
          cyan: '#22d3ee',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(168, 85, 247, 0.45)',
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.35)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
