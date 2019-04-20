module.exports = {
    plugins: [
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
      {
        resolve: 'gatsby-source-drupal',
        options: {
          baseUrl: 'http://dev-a11y-issues.pantheonsite.io', apiBase: 'jsonapi/node/issue'
        }
      }
    ],
  }



