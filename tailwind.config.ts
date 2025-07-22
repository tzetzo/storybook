import type { Config } from 'tailwindcss';
import { colors, white, black, transparent, currentColor } from './src/tokens/colors';
// import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx,html}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      ...colors,
      white,
      black,
      transparent,
      currentColor,
    },
    extend: {
      fontFamily: {
        sans: ['InterVariable', 'sans-serif'],
      },
    },
    // extend: {
    //   colors: {
    //     primary: colors.indigo,
    //     success: colors.green,
    //     warning: colors.amber,
    //     danger: colors.red,
    //     info: colors.blue,
    //     surface: colors.slate,
    //   },
    // },
  },
  plugins: [],
} satisfies Config;
