/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-light-10": "#fff",
        "primary-dark-80": "#05000a",
        "secondary-dark-20": "#111",
        "secondary-dark-60": "#555",
        "secondary-light-30": "#f8f8f8",
        "secondary-light-70": "#ccc",
        "secondary-light-60": "#ddd",
        "primary-20": "#fbf8ff",
        "secondary-dark-50": "#444",
        "primary-40": "#e9d6ff",
        "primary-80": "#AACE88",
        "secondary-dark-40": "#333",
        "secondary-dark-30": "#222",
        "secondary-light-40": "#f4f4f4",
        mediumblue: "#AACE88",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#dedede",
          "300": "#d9d9d9",
          "400": "rgba(222, 222, 222, 0.09)",
        },
        "secondary-light-80": "#bbb",
        silver: "#c4c4c4",
        "primary-801": "#aace88",
        blueviolet: "#b047ff",
        "primary-401": "#d0f7ab",
        darkslategray: {
          "100": "#38333d",
          "200": "rgba(56, 51, 61, 0.09)",
        },
        gray: {
          "100": "#777",
          "200": "rgba(0, 0, 0, 0.2)",
          "300": "rgba(0, 0, 0, 0.35)",
          "400": "rgba(0, 0, 0, 0.5)",
        },
        "secondary-light-20": "#fcfcfc",
        "secondary-dark-10": "#000",
        "secondary-light-50": "#f0f0f0",
        lightgray: {
          "100": "#d6d6d6",
          "200": "rgba(214, 214, 214, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        "paragraphs-para-18px-semibold": "'Plus Jakarta Sans'",
        "sub-headings-sub-heading-26px-semibold": "Urbanist",
        inter: "Inter",
      },
      borderRadius: {
        "481xl": "500px",
        "26xl-7": "45.7px",
        xl: "20px",
        "6xl": "25px",
        "31xl": "50px",
        mini: "15px",
        "11xl": "30px",
        "3xs": "10px",
        "smi-7": "12.7px",
        "5xl-7": "24.7px",
        "smi-5": "12.5px",
        "4xs-5": "8.5px",
        "mini-2": "14.2px",
        "3xs-5": "9.5px",
        "9xs-2": "3.2px",
        "2xl-6": "21.6px",
        "10xl-7": "29.7px",
        "6xs-1": "6.1px",
        "base-3": "15.3px",
        "7xs-1": "5.1px",
        "828xl-5": "847.5px",
        sm: "14px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      "7xl": "26px",
      "2xl": "21px",
      "23xl": "42px",
      "15xl": "34px",
      "6xl": "25px",
      "41xl-2": "60.2px",
      "29xl": "48px",
      "17xl": "36px",
      "35xl": "54px",
      "24xl": "43px",
      "13xl": "32px",
      xl: "20px",
      sm: "14px",
      "3xl": "22px",
      "41xl": "60px",
      "22xl-5": "41.5px",
      "5xl": "24px",
      lgi: "19px",
      "10xl": "29px",
      "19xl": "38px",
      "3xl-6": "22.6px",
      "mid-5": "17.5px",
      "3xs-5": "9.5px",
      "base-3": "16.3px",
      "base-8": "16.8px",
      "11xl": "30px",
      "2xs-2": "10.2px",
      xs: "12px",
      "mini-4": "14.4px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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
