import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from "gatsby";
// import firebase from "gatsby-plugin-firebase";
// import "firebase/auth";
// import { useSelector } from "react-redux";
// import { store, setLoggedIn } from "../redux/store";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  background: {
    backgroundColor: 'rebeccapurple'
  },
  a: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '26px'
  }
}));

export default function Navbar({ siteTitle }) {
  const [name, setName] = useState("")
  const classes = useStyles();

  // const login = useSelector((state: { login: boolean }) => state.login)
  //   firebase.auth().onAuthStateChanged(function (user) {
  //     if (user) {
  //       setName(user.displayName)
  //     }
  //   })
  
  //   const Logout = () => {
  //     firebase.auth().signOut().then(function () {
  //         store.dispatch(setLoggedIn(false))
  //       })
  //       .catch(function (error) {
  //         console.log(error)
  //       })
  //     setName("")
  //   }  

  //   const Login = async () => {
  //     var provider = new firebase.auth.GoogleAuthProvider()
  //     await firebase.auth().signInWithPopup(provider)
  //     store.dispatch(setLoggedIn(false))
  //   }


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.background}>
        <Toolbar>          
          <Typography variant="h6" className={classes.title}>
           <Link to="/" className={classes.a}> {siteTitle} </Link> 
          </Typography>
          
          {/* <div className="navbar-log">
            {name !== "" ? <span className="sp-one">Hi, {name}</span> : ""}
            <span>
              {login !== true ? (
                <button className="login-btn" onClick={() => Login()}>
                  Login | Sign-up
                </button>
              ) : (
                <button className="logout-btn" onClick={() => Logout()}>
                  Logout
                </button>
             )}
            </span>
         </div>             */}
        </Toolbar>        
      </AppBar>      
    </div>  
    
  );
}
