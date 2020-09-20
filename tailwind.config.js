module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        github: '#333'
      },
      fontFamily: {
        fancy: 'Rubik,Helvetica Neue,Arial,sans-serif'
      },
      transitionProperty: {
        button: "box-shadow, transform",
      },
    },
  },
  variants: {
    boxShadow: ["responsive", "hover", "focus", "active"],
    translate: ["responsive", "hover", "focus", "active"],
  },
  plugins: [require("@tailwindcss/ui")],
};
