const path = require("path")

exports.createPages = async ({graphql, actions})=> {
    const { createPage } = actions;
    const response = await graphql(`
      query {
        allContentfulBlogPost {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "Do MMMM, YYYY")
              featuredImage {
                fluid(maxWidth: 750) {
                  src
                }
              }
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
            }
          }
        }
      }
    `);
      console.log("response =",response);
    response.data.allContentfulBlogPost.edges.forEach(edge=> {
        createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve("./src/templates/blog-post.tsx"),
            context: {
                slug: edge.node.slug,                
            }
        });
    })
}