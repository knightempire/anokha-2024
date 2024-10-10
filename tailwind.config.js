/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-down": "5px 5px 10px rgba(0, 0, 0, 0.6)", // Define your custom shadow here
        "custom-up": "5px -5px 10px rgba(0, 0, 0, 0.6)", // Define your custom shadow here
      },
      fontFamily: {
        roobert: ["Roobert-Regular", "sans-serif"],
        spincycle: ["Spin-cycle", "sans-serif"],
        
      },
    },

    screens: {
      sm: "300px",
      // @media (min-width: 640px)

      md: "768px",
      // @media (min-width: 768px)

      lg: "1024px",
      // @media (min-width: 1024px)

      xl: "1280px",
      // @media (min-width: 1280px)

      "2xl": "1536px",
      // @media (min-width: 1536px)
    },

    keyframes: {
      slidein: {
        from: {
          opacity: "0",
          transform: "translateY(-10px)",
        },
        to: {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
    },
    animation: {
      slidein: "slidein 1s ease 300ms",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
