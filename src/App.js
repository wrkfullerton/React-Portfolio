import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    
    <Switch>
    <Route path="/about">
     <About />
     </Route>

     <Route path="/projects">
     <Projects />
     </Route>

     <Route path="/contact">
     <Contact />
     </Route>

     <Route path="/">
     <Main />
     </Route>

     </Switch>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
