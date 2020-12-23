import React from "react";
import { graphql, Link } from "gatsby";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

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
     console.log(props);

    return (
      <div>
        <Link to="/"> Visit the Blog Page </Link>
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
        </div>
      </div>
    )
}
export default BlogPost