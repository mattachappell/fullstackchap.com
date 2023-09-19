/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
  });
  
module.exports = {
    siteMetadata: {
        title: "Matt Chappell Portfolio",
        description: "This is Matt Chappell's Personal Portfolio Site built with Gatsby and Semantic UI.",
        author: "Matt Chappell",
    },
    plugins: [
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/content/media`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `education`,
                path: `${__dirname}/content/education`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `certification`,
                path: `${__dirname}/content/certification`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `work`,
                path: `${__dirname}/content/work`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `metadata`,
                path: `${__dirname}/content/metadata`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `project`,
                path: `${__dirname}/content/project`,
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    backgroundColor: `white`,
                    quality: 100
                }
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Matt Chappell Portfolio`,
                short_name: `Matt Chappell Portfolio`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#66d37e`,
                display: `minimal-ui`,
                icon: 'content/media/profile_relaxed_square.jpg'
            },
        },
        `gatsby-transformer-json`,
        `gatsby-plugin-sass`,
    ],
};
