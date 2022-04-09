module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-descola',
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: false,
      },
    },
  ],
}
