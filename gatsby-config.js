const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'CodeWithIhwan',
    author: 'Ihwan ID',
    description: 'Website tempat belajar mobile programming berbahasa Indonesia lengkap. membahas teknologi native untuk Android, iOS dan Hybrid dengan Flutter.',
    siteUrl: 'https://codewith.ihwan.id',
    social: {
      twitter: '@Ihwan_ID',
      facebook: 'ihwan.id',
      instagram: 'codewithihwan',
      github: 'codewithihwan',
    },
    config: {
      postsPerPage: 10,
      disqus: 'ihwanid',
    },
  },

  plugins: [
    {
      resolve: 'gatsby-theme-ghost-casper',
      options: {
        title: 'CodeWithIhwan',
      },
    },
    ...(process.env.NODE_ENV === 'production'
      ? [
          {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: `UA-125079658-2`,
            },
          },
        ]
      : []),
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CodeWithIhwan`,
        short_name: `CodeWithIhwan`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: path.resolve(`src/assets/icon.png`),
      },
    },
    `gatsby-plugin-offline`,
  ],
};
