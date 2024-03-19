import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ["Unbounded", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
        dmsans: ["DM sans", "sans-serif"],
      },
      colors: {
        charcoalblue: "#17181D",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "purple-dark": {
          extend: "dark",
          colors: {
            background: "#0E0C15",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        light: {
          extend: "light",
          colors: {
            background: "#FFFFFF",
            foreground: "#000000",
            primary: {
              50: "#3B096C",
              100: "#FBE6EB",
              200: "#F7C2CD",
              300: "#F39EAF",
              400: "#EC5780",
              500: "#E41152",
              600: "#D60E4A",
              700: "#8C0932",
              800: "#690722",
              900: "#460512",
              DEFAULT: "#DD62ED",
              foreground: "#000000",
            },
            focus: "#D60E4A",
          },
          layout: {
            disabledOpacity: "0.3",
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
