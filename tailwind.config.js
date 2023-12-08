/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "twitter-blue-default": "#1D9BF0",
        "twitter-blue-hover": "#1871CA",
        "twitter-blue-disabled": "#1E5D87",
        "twitter-blue-wash": "#75BEEF",
        "twitter-button-stroke": "#546A7A",
        "twitter-searchbar-fill": "#212327",
        "twitter-success": "#00BE74",
        "twitter-error": "#8B141A",
        "twitter-neutral-50": "#F9F9F9",
        "twitter-neutral-100": "#F4F4F4",
        "twitter-neutral-200": "#E4E4E4",
        "twitter-neutral-300": "#D3D3D3",
        "twitter-neutral-400": "#A2A2A2",
        "twitter-neutral-500": "#737373",
        "twitter-neutral-600": "#525252",
        "twitter-neutral-700": "#404040",
        "twitter-neutral-800": "#262626",
        "twitter-neutral-900": "#171717",
        "twitter-neutral-950": "#F9F9F9",
      },
      fontSize: {
        "twitter-size-10px": "10",
        "twitter-size-13px": "13",
        "twitter-size-15px": "15",
        "twitter-size-17px": "17",
        "twitter-size-19px": "19",
        "twitter-size-26px": "26",
        "twitter-size-31px": "31",
      },
      boxShadow: {
        "twitter-button-shadow": "0px 8px 16px 0px rgba(0, 0, 0, 0.25);"
      },
      borderRadius: {
        "twitter-rounded":"4.0625rem",
        "twitter-less-rounded":"1.875rem",
        "twitter-more-rounded":"624.9375rem",
        "12-rem":"12rem",
      },
      fontFamily:{
        "inter":['Inter', 'sans-serif'],
      },
      width:{
        "37-rem":"37.375rem",
        "30-rem":"30rem",
        "28-rem":"28.4375rem",
        "27-rem":"27rem",
      },
      height:{
        "1px":"1px",
        "12-rem":"12.4375rem",
      },
      borderWidth:{
        "twitter-3.5":"3.5rem",
      },
      gap:{
        "2px":"2px",
      },
      padding:{
        "236px":"236px",
        "161.9":"161.936px"
      },
      borderColor: ['focus'],
    },
  },
  plugins: [],
}

