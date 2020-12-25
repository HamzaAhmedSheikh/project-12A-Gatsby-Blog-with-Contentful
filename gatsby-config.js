require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
  
  module.exports = {
    /* Your site config here */    
    
    plugins: [ 
      "gatsby-plugin-typescript",
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: 'veuwxj3lf5hu', //process.env.CONTENTFUL_SPACE_ID
          accessToken: '3P97TEL26kqRgPNPUcttPXQopMQUXnTPLEXMykem8y4', //process.env.CONTENTFUL_ACCESS_TOKEN
        },
      },
      {
        resolve: "gatsby-plugin-firebase",
        options: {
          credentials: {
            apiKey: process.env.API_KEY,
            authDomain: process.env.authDomain,    
            projectId: process.env.projectId,
            storageBucket: process.env.storageBucket,
            messagingSenderId: process.env.messagingSenderId,
            appId: process.env.appId,
            measurementId: process.measurementId,
          },
        },
      },
    ],
  };
    