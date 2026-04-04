export default {

  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],

  theme: {
    extend: {

      colors: {

        primary: "rgb(var(--primary) / <alpha-value>)",
        primaryHover: "rgb(var(--primary-hover) / <alpha-value>)",

        bgMain: "rgb(var(--bg-main) / <alpha-value>)",
        bgCard: "rgb(var(--bg-card) / <alpha-value>)",

        textMain: "rgb(var(--text-main) / <alpha-value>)",

        borderColor: "rgb(var(--border-color) / <alpha-value>)"

      }

    }
  }

}