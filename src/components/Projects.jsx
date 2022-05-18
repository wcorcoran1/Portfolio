import React from "react";

const Projects = ()=>{

return(

    <div>
        <h1>Projects</h1>
        <div className="projects">
        <div className="Project1">
        <h2>GameStart</h2>
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
        <a href="https://github.com/Worker-Bee-Engineering/GameStart">View Code</a>
        </div>
        <div className="Project2">
        <h2>JuiceBox</h2>
        <p>Juice box is a backend project that me and a teammate built for class. Juice box was a sorta like a social media backend startup with posts and tags for its users. </p>
        <p>Technologies used</p>
        <ul>
        <li>PostgreSQL</li>
        <li>Express</li>
        <li>NodeJs</li>
        </ul>
        <button>View Code</button>
        </div>
        <div className="Project3">
        <h2>Stranger Things</h2>
        <p>
            An E-commerce site that me and a teammate built that is sorta like craig's list. It has post of sellers of what every it is that they wish to sell.
        </p>
        <p>Technologies used</p>
        <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>HTML</li>
        </ul>
        <button>View Code</button>
        </div>
         </div>  
    
    </div>
)

}

export default Projects