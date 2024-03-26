import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#D2D2D2",
        "secondary": "#1F1F1F",
        "tertiary": "#482019",
        "quaternary": "#FAFAFA",
        "quinary": "#1F1F1F4D",
        "gray": "#F6F3F2",
        "deactivate": "#4C4C4C",
        "gray-light": "#CAC4D0",
      },
      fontFamily: {
        sans: ['var(--font-vazir)'],
        mono: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
export default config;
