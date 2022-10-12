import React from "react";
import  ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Main, NavBar, About, Projects, ContactMe} from './components'

const container = document.getElementById("app");

const app = ReactDOM.createRoot(container);

app.render(
<Router>
    <NavBar />
    <ContactMe />
    <Routes>
    <Route path="/about"element={<About />}/>
    <Route path="/projects"element={<Projects />}/>
    <Route path="/" element={<Main />} />
    </Routes>
</Router> ,
);