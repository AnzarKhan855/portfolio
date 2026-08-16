/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        card: '#0B0F28',
        'card-hover': '#12183B',
        primary: {
          DEFAULT: '#00F5FF',
          glow: 'rgba(0, 245, 255, 0.4)',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          glow: 'rgba(124, 58, 237, 0.4)',
        },
        accent: {
          DEFAULT: '#00FFA3',
          glow: 'rgba(0, 255, 163, 0.4)',
        },
        cyber: {
          dark: '#03050C',
          glass: 'rgba(255, 255, 255, 0.04)',
          border: 'rgba(0, 245, 255, 0.15)',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(0, 245, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 245, 255, 0.05) 1px, transparent 1px)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'matrix-rain': 'matrixRain 10s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(0, 245, 255, 0.5))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(0, 245, 255, 0.9))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
