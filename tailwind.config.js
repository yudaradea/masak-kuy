module.exports = {
  darkMode: "class",
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "#E5E5E5",
        primary: "#007BA7",
        secondary: "#FF6464",
        mainText: "#2E3E5C",
        secondaryText: "#9FA5C0",
        outline: "#D0DBEA",
        form: "#F4F5F7",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Clash_Display: ["Clash_Display"],
      },
    },
    container: {
      padding: {
        DEFAULT: "20px",
        md: "30px",
        // sm: "2rem",
        // lg: "4rem",
        // xl: "5rem",
        // "2xl": "6rem",
      },
      // screens: {
      //   sm: "600px",
      //   md: "728px",
      //   lg: "984px",
      //   xl: "1240px",
      //   "2xl": "1496px",
      // },
      center: true,
    },
  },
  plugins: [],
};
