module.exports = {
  content: {
    files: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./app.vue",
      "./plugins/**/*.{js,ts}",
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        tea: "url('/hobbies/tea-cup.webp')",
        blog: "url('/hobbies/myblog.webp')",
        music:
          "url('/hobbies/negative-space-headphones-black-white-corey-blaz.webp')",
        grocer: "url('/hobbies/grocer.webp')",
      },
      minWidth: {
        sm: "20rem",
        md: "28rem",
      },
      minHeight: {
        "project-card": "12rem",
      },
      maxWidth: {
        xxs: "16rem",
        container: "1440px",
      },
      screens: {
        iphone: "414px",
        "3xl": "1680px",
      },
      boxShadow: {
        enter: "0 90px 150px rgb(108 73 172 / 15%)",
      },
      gap: {
        cardGap: "clamp(1rem,2vw,30px)",
      },
      gridTemplateColumns: {
        cardColumns: "repeat(auto-fit,minmax(338px,1fr))",
      },
    },
  },
};
