export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "Iris Spaces - Premium Workspace Solutions",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        // Primary description (used by Google)
        {
          name: "description",
          content:
            "iris Spaces, premium private offices, workspace, and café in Lahore for teams and individuals seeking balance and creativity.",
        },

        // Secondary tagline for social media
        {
          property: "og:description",
          content:
            "A perfect blend of creativity, design, and functionality to elevate your living and working experience.",
        },
        {
          name: "keywords",
          content:
            "Iris Spaces, architecture, design, modern living, creative spaces",
        },

        // Optional: open graph title for social media cards
        {
          property: "og:title",
          content: "Iris Spaces - Premium Workspace Solutions",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap",
        },
      ],
    },
  },
  ssr: true,
});
