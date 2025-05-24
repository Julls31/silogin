/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-footer': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
       scrollBehavior: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [require('daisyui','@tailwindcss/aspect-ratio'),

  ],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#DB1F26",
          secondary: "#FFFFFF",
          accent: "#DEE1E6",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "base-200": "#F8F9FA",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        }
      },
      "light"]
  }
}

