require("dotenv").config()
  
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
      // {
      //   resolve: "gatsby-plugin-firebase",
      //   options: {
      //     credentials: {
      //       apiKey: "AIzaSyDKA9bIr7sDoHdFhzWkFhHhzxytqVN8FeA",
      //       authDomain: "gatsby-blog-with-contentful.firebaseapp.com",
      //       projectId: "gatsby-blog-with-contentful",
      //       storageBucket: "gatsby-blog-with-contentful.appspot.com",
      //       messagingSenderId: "72815546494",
      //       appId: "1:72815546494:web:7abf605495d6c96396482f",
      //       measurementId: "G-PBJXLFPF82"
      //     },
      //   },
      // },
    ],
  };
    