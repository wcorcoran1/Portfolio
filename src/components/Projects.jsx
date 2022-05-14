import React from "react";

const Projects = ()=>{

return(

    <div>
        <div className="projects">
        <h1>Projects</h1>
        <div>
        <h2 id="Project1">GameStart</h2>
        <p>This is my final project from my time at FullStack Academy.
            This project was a group project that showcases our ability to make a FullStack application. 
            GameStart is a E-commerce site that sells video games and gaming accessories.
        </p>
        <p>Technologies used</p>
        <ul>
        <li>PostgreSQL</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        </ul>
        <button>View Code</button>
        </div>
        <div>
        <h2 id="project2">JuiceBox</h2>
        <p>Juice box is a backend project that me and a teammate built for class. Juice box was a sorta like a social media backend startup with posts and tags for its users. </p>
        <p>Technologies used</p>
        <ul>
        <li>PostgreSQL</li>
        <li>Express</li>
        <li>NodeJs</li>
        </ul>
        <button>View Code</button>
        </div>
        
         </div>  
    
    </div>
)

}

export default Projects