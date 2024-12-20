/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),

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

