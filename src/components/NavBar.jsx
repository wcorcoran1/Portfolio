import React from "react";
import { Link } from "react-router-dom"

const NavBar = ()=>{

return(

    <div>
        <div className="Nav">
            <h1>WC</h1>
       <Link className="link" to="/about">AboutMe</Link>
       <Link className="link" to="/projects">Projects</Link>
         </div> 
    
    </div>
)

}

export default NavBar