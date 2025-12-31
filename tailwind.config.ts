import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        niner: {
          primary: 'hsl(230, 60%, 45%)',
          'primary-dark': 'hsl(230, 60%, 35%)',
          'primary-light': 'hsl(230, 60%, 55%)',
          accent: 'hsl(190, 90%, 50%)',
          'accent-light': 'hsl(190, 90%, 65%)',
          background: 'hsl(230, 40%, 12%)',
          'background-light': 'hsl(230, 35%, 18%)',
          card: 'hsl(230, 35%, 18%)',
          foreground: 'hsl(0, 0%, 98%)',
          'muted-foreground': 'hsl(230, 15%, 60%)',
          muted: 'hsl(230, 25%, 22%)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
