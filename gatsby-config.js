require("dotenv").config()
  
  module.exports = {
    /* Your site config here */    
    
    plugins: [ 
      "gatsby-plugin-typescript",
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID, 
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, 
        },
      },      
    ],
  };
    