/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aliceblue: {
          "100": "#ebf1fb",
          "200": "#ecf1f7",
          "300": "#ecf1f6",
          "400": "#e6eff9",
        },
        lightsteelblue: "#c2d8f1",
        "instagram-light-1": "#fff",
        black: "#000",
        mediumblue: "#3f3bff",
        gray: {
          "100": "#fafafa",
          "200": "#76777e",
          "300": "#212121",
          "400": "#1b1b1f",
          "500": "#151716",
        },
        dimgray: {
          "100": "#5a686c",
          "200": "#595959",
        },
        "instagram-light-2": "#efefef",
        orange: "#ffac00",
        ghostwhite: "#f5f9fe",
        "instagram-light-4": "#5c5c7b",
        whitesmoke: "rgba(239, 239, 239, 0.4)",
        "instagram-light-3": "#7878a3",
        "instagram-secondary": "#ffb620",
        darkslategray: "#333",
        red: "#ff0029",
        darkgray: "rgba(167, 167, 167, 0.15)",
      },
      spacing: {},
      fontFamily: {
        "h3-bold": "Inter",
        nexa: "Nexa",
        "kaushan-script": "'Kaushan Script'",
      },
      borderRadius: {
        "6xs-3": "6.3px",
        xl: "20px",
        "81xl": "100px",
        "11xl": "30px",
        "42xl-1": "61.1px",
        "8xs": "5px",
        "3xs": "10px",
        "smi-6": "12.6px",
      },
    },
    fontSize: {
      "5xl": "24px",
      base: "16px",
      "mini-7": "14.7px",
      sm: "14px",
      xs: "12px",
      "3xs": "10px",
      lg: "18px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
