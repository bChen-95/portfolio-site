/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'delayed-fade-in': {
          '0%': { opacity: '0', animationTimingFunction: 'ease-in' },
          '50%': { opacity: '0', animationTimingFunction: 'ease-in' },
          '100%': { opacity: '1', animationTimingFunction: 'ease-in' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0) ' },
        },
      },
      animation: {
        'delayed-fade-in': 'delayed-fade-in 2s 1s forwards',
        'fadeInUp': 'fadeInUp 0.5s ease-out',
      },  
    },
  },
  plugins: [],
}
