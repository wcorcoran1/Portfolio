import React from "react";
import { Link } from "react-router-dom"

const NavBar = ()=>{

return(

    <div>
        <div className="Nav">
        <img className="navImage" src="/Gold Exclusive Royal Luxury Hotel Logo.png" alt="not found" />
       <Link className="link" to="/about">AboutMe</Link>
       <Link className="link" to="/projects">Projects</Link>
         </div> 
    
    </div>
)

}

export default NavBar