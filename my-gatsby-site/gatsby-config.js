module.exports = {
  siteMetadata: {
    title: `Dead Page`,
    one: `Whenever you feel like criticizing any one, just remember that all the people in this world haven’t had the advantages that you’ve had.`,
    two: `A sense of fundamental decencies is parceled out unequally at birth.`,
    three: `All the bright precious things fade so fast...and they don't come back.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: { pathToConfigModule: `src/utils/typography` },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
};
