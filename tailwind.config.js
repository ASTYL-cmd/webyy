/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        surface: '#0d0d0d',
        'surface-2': '#111114',
        blue: {
          DEFAULT: '#4F8EF7',
          glow: 'rgba(79,142,247,0.15)',
        },
        purple: {
          DEFAULT: '#8B5CF6',
          glow: 'rgba(139,92,246,0.12)',
        },
        cyan: '#22D3EE',
        'white-custom': '#F8F8FC',
        border: 'rgba(248,248,252,0.07)',
        'border-bright': 'rgba(79,142,247,0.3)',
        glass: 'rgba(13,13,20,0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '16px',
        sm: '8px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'pulse-custom': 'pulse 2s ease-in-out infinite',
        'gradient-shift': 'gradShift 4s ease infinite',
        'orbit': 'orbit 30s linear infinite',
        'orbit-reverse': 'orbit 45s linear infinite reverse',
        ticker: 'ticker 20s linear infinite',
        'marquee-left': 'marqueeLeft 30s linear infinite',
        'marquee-right': 'marqueeRight 35s linear infinite',
        'scroll-drop': 'scrollDrop 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4F8EF7, #8B5CF6)',
        'gradient-glow': 'linear-gradient(135deg, rgba(79,142,247,0.15), rgba(139,92,246,0.15))',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(79,142,247,0.3)',
        'glow-blue-lg': '0 0 50px rgba(79,142,247,0.5)',
        'glow-purple': '0 0 20px rgba(139,92,246,0.2)',
      },
    },
  },
  plugins: [],
};
