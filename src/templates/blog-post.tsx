import React, { useContext, useState } from "react";
import { graphql, Link, navigate } from "gatsby";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Layout from '../components/Layout';
import Footer from '../components/footer';


export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD MMM, YYYY")
      featuredImage {
        fluid(maxWidth: 750) {
          src
        }
      }
      body {
        raw
      }
    }
  }
`;

 const BlogPost = (props) => {
       console.log(props)   
    
    return (
      <>
      <Layout>        
        <div className="content">          
          <h1 className="tempHead">{props.data.contentfulBlogPost.title}</h1>
          <span className="meta">
            Post on {props.data.contentfulBlogPost.publishedDate}
          </span>

          {
            props.data.contentfulBlogPost.featuredImage && (
            <img 
              className="featured"
              src={props.data.contentfulBlogPost.featuredImage.fluid.src}
              alt={props.data.contentfulBlogPost.title}
            />
            )
          }

          <p>
            {documentToPlainTextString(JSON.parse(props.data.contentfulBlogPost.body.raw))}
          </p> 
                      
          <button className="vist-btn">
            <Link to="/"> Visit the Blog Page </Link>
          </button>                     
        </div>        
      </Layout>
      <Footer />
      </>
    )
}
export default BlogPost;