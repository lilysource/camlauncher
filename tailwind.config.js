/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          950: '#05070d',
          900: '#080b14',
          800: '#0d1220',
          700: '#131a2b',
          600: '#1a2338',
        },
        cam: {
          400: '#5aa5ff',
          500: '#2f7fff',
          600: '#1a5fe0',
          700: '#123fa6',
          glow: '#4cc9ff',
        },
      },
      fontFamily: {
        display: ['Rajdhani', 'Noto Sans Khmer', 'sans-serif'],
        body: ['Noto Sans Khmer', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(47,127,255,0.55), 0 0 60px rgba(47,127,255,0.25)',
        'glow-lg': '0 0 40px rgba(47,127,255,0.65), 0 0 100px rgba(47,127,255,0.3)',
        'glow-cyan': '0 0 20px rgba(76,201,255,0.5)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(47,127,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(47,127,255,0.08) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 3.5s cubic-bezier(0.4,0,0.6,1) infinite',
        scan: 'scan 6s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
