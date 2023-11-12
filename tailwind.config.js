const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = {
//   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {

//    extend: {
//       colors: {
//         primary: '#63AB45',
//         secondary: '#F7921E',
//         dark:'#1D231F'
//       }
//     },
//   },

//   plugins: [],
// };

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#63AB45",
        secondary: "#F7921E",
        dark: "#1D231F",
      },
    },
  },
  plugins: [],
});
