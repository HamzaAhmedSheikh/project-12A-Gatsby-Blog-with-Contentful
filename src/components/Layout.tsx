import React from "react"
import Navbar from './header'

const Layout = ({children}) => {
    return (
      <div>
        <Navbar siteTitle="Gatsby Blog Site" />        
        <div
          style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
         }}
        >            
         <main>
          {children}
         </main>             
        </div>            
      </div>
    );
}
export default Layout;