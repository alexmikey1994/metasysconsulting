// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // scan all TS/JS pages
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
