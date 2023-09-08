import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "neue-haas-grot": "var(--font-neue-haas-grot)",
      },
      colors: {
        "cmc-orange": {
          100: "#FF4C21",
          80: "#FF704D",
          60: "#FF947A",
          40: "#FFB716",
          20: "#FFD8D3",
        },
        "cmc-navy": {
          100: "#05051B",
        },
        "cmc-gray": {
          100: "#3A3D42",
          40: "#B5BEBE",
          30: "#CFDADC",
          20: "#E3F1F3",
          10: "#F2F7F7",
        },
        "cmc-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config
