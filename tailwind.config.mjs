/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary - Deep tropical green for elegance
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // Secondary - Warm gold/amber for luxury accents
        secondary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Tropical ocean blue
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Neutral cream/sand tones
        sand: {
          50: '#fdfdf9',
          100: '#faf8f0',
          200: '#f5f0e1',
          300: '#ece4cc',
          400: '#ddd2b0',
          500: '#c9ba8f',
          600: '#b5a070',
          700: '#9a8558',
          800: '#7d6c48',
          900: '#66583c',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 30px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 10px 50px rgba(0, 0, 0, 0.12)',
        'soft-xl': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'inner-soft': 'inset 0 2px 10px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 40px rgba(34, 197, 94, 0.15)',
        'glow-gold': '0 0 40px rgba(245, 158, 11, 0.2)',
      },
      backgroundImage: {
        'tropical-gradient': 'linear-gradient(135deg, #166534 0%, #14532d 50%, #052e16 100%)',
        'sunset-gradient': 'linear-gradient(180deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
        'ocean-gradient': 'linear-gradient(180deg, #0ea5e9 0%, #0369a1 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
