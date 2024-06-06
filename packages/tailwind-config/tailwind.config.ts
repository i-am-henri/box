import type { Config } from "tailwindcss";

import { fontFamily } from "tailwindcss/defaultTheme";
// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      extend: {
        fontFamily: {
          sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        },
      },
    },
  },
  plugins: [],
};
export default config;