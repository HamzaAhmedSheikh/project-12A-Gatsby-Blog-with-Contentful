import React from "react";
import { graphql, Link } from "gatsby";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Layout from '../components/Layout';
// import firebase from "gatsby-plugin-firebase";
// import { store, setLoggedIn } from "../redux/store";
// import { useSelector } from "react-redux";
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
      console.log(props);

  // const loggedIn = useSelector((state: {login : boolean}) => state.login)
  // console.log('loggedIn ===> ', loggedIn)

  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     store.dispatch(setLoggedIn(true))
  //   } else {
  //     store.dispatch(setLoggedIn(false))
  //   }
  // })

  // const Login = async () => {
  //   var provider = new firebase.auth.GoogleAuthProvider()
  //   await firebase.auth().signInWithPopup(provider)
  //   store.dispatch(setLoggedIn(true))
  // }


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
            
            {/* {loggedIn ? (  className={loggedIn ? "paragraph" : "notlogged"}
                ""
              ) : (
                <button className="login-btn" onClick={() => Login()}>
                  Login | Signup
                </button>
            )}               */}
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