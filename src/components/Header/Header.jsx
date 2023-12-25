import React from 'react';
import classes from './Header.module.css';
 console.log(classes);

const Header = () =>{
    return(
        <header className={classes.header}> 
         <img src='https://assets-global.website-files.com/60a35497ea15cf45782248b1/6542538243b2ed8bf068aad6_616fce41ab393a1be.webp'></img>
      </header>
    )
}
 export default Header;