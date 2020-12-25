import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from "gatsby";

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
}));


export default function Footer() {
    const classes = useStyles();    
  return(
     <div className={classes.root}>
       <AppBar position="static" className={classes.background}>
       <Toolbar>          
        <Typography variant="h6" className={classes.title}>
          <footer style={{marginLeft:"50px"}}> © {new Date().getFullYear()}, Blog Site </footer>
        </Typography>
       </Toolbar>        
      </AppBar>
     </div>
   )
}