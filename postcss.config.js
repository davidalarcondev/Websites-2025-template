module.exports = {
  plugins: [
    require("css-declaration-sorter")({
      order: "smacss", // Opctions: 'alphabetical', 'smacss', 'concentric-css'
    }),
  ],
};
