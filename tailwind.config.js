/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0a0a', // Pure black
          light: '#f9f9f9' // Pure white
        },
        secondary: {
          DEFAULT: '#6a6a6a', // Pure gray for dark mode
          light: {
            DEFAULT: '#7a7a7a', // Slightly lighter gray
            background: 'rgba(128, 128, 128, 0.2)' // Neutral gray background
          },
          dark: '#5a5a5a' // Slightly darker gray
        },
        tertiary: {
          DEFAULT: '#121212', // Very dark gray
          light: '#e6e6e6' // Very light gray
        },
        lightText: {
          DEFAULT: '#d0d0d0', // Light gray
          dark: '#1a1a1a' // Very dark gray
        },
        darkText: {
          DEFAULT: '#808080', // Medium gray
          light: '#606060' // Slightly darker medium gray
        },
      },
      textColor: {
        secondary: {
          light: '#7a7a7a', // Neutral gray for light mode
          DEFAULT: '#6a6a6a' // Neutral gray for dark mode
        }
      },
      backgroundColor: {
        'secondary-light': 'rgba(128, 128, 128, 0.2)' // Neutral gray background
      },
      animation: {
        // Custom animations
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-in': 'bounceIn 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'subtle-float': 'subtleFloat 3s ease-in-out infinite',
        'text-shimmer': 'textShimmer 2s infinite linear',
        'gradient-x': 'gradientX 15s ease infinite',
        'gradient-y': 'gradientY 15s ease infinite',
        marquee: 'marquee var(--duration, 40s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--duration, 40s) linear infinite',
      },
      keyframes: {
        // Custom keyframe animations
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
          '70%': { transform: 'scale(0.9)', opacity: '0.9' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        gradientY: {
          '0%, 100%': { 'background-position': '50% 0%' },
          '50%': { 'background-position': '50% 100%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'background': 'background-color, background-image',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      boxShadow: {
        'soft-glow': '0 0 15px rgba(0, 0, 0, 0.1), 0 0 30px rgba(0, 0, 0, 0.05)',
        'dark-glow': '0 0 20px rgba(255, 255, 255, 0.1), 0 0 40px rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [
    // Custom plugin for advanced text effects
    require('tailwindcss/plugin')(function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          'background-image': 'linear-gradient(to right, #808080, #a0a0a0)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
        },
        '.text-shimmer': {
          'background-image': 'linear-gradient(to right, #808080 0%, #a0a0a0 50%, #808080 100%)',
          'background-size': '200% auto',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
          'animation': 'textShimmer 2s infinite linear',
        }
      }
      addUtilities(newUtilities)
    })
  ],
};
