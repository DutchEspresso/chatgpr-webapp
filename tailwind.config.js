/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#878787",
          "200": "#787878",
          "300": "#131313",
          "400": "rgba(120, 120, 120, 0.09)",
        },
        white: "#fff",
        gainsboro: "#d9d9d9",
        darkgray: "#aaa",
        blueviolet: "#8400eb",
        darkviolet: "#ab26ff",
        "color-text-muted": "#71717a",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xl": "22px",
        "131xl": "150px",
        "81xl": "100px",
      },
    },
    fontSize: {
      "3xl": "22px",
      lg: "18px",
      "6xl": "25px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "11xl": "30px",
      "9xl": "28px",
      "18xl": "37px",
      "34xl": "53px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};