module.exports = {
  purge: [
    "./pages/**/*.js",
    "./client/**/*.js",
    "./client/blogPosts/*.js",
    "./client/components/**/*.js",
    "./client/utils/*.js",
  ],
  darkMode: "media",
  theme: {
    screens: {
      sm: "320px",
      md: "480px",
      lg: "720px",
      xl: "1080px",
      "2xl": "1280px",
    },
    extend: {},
    fontFamily: {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
      boxShadow: ["responsive", "hover", "focus"],
      translate: ["hover"],
      transform: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
