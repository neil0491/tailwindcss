module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: (theme) => ({
      "location-icon": "url('/img/location.svg')",
      "home-icon": "url('/img/house.svg')",
    }),
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      16: "4rem",
      8: "2rem",
      6: "1.5rem",
    },
    fontFamily: {
      serif: ["Metropolis ", "serif"],
      sans: ["Metropolis ", "sans-serif"],
    },
    extend: {
      zIndex: {
        "-1": "-1",
      },
      width: {
        "45": "10.2rem",
      },
      colors: {
        "main-color": "#003458",
        "secondary-color": "#82CDE5",
        "white-color": "#FFFFFF",
        "section-color": "#F2F9FB",
        "title-color": "#333333",
        "card-color": "#F2F9FB",
      },
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
};
