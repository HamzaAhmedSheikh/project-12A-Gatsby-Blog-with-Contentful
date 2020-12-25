import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from '../components/Layout';

const Home = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "Do MMMM, YYYY")
              featuredImage {
                file {
                  url
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
    `
  );  
     // console.log("data = ",data);
   
  return(
    <Layout>      
     <div>
       <ul className="posts">
        {data.allContentfulBlogPost.edges.map((edge) => {    
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              
              <div className="meta">
                <span>Posted on {edge.node.publishedDate}</span>
              </div>

                {edge.node.featuredImage && (
                  <img
                    className="homeImg"
                    src={edge.node.featuredImage.file.url}
                    alt={edge.node.title}
                  />
                )}

              <p className="excerpt">
                  {edge.node.excerpt.childMarkdownRemark.excerpt}
              </p>

              <div className="button">
                <Link to={`/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
           );
         })}
       </ul>
     </div>
    </Layout>
  )  
}


export default Home;