import './App.css';
import Samantha from "./Samantha";
import Stars from "./Stars";
import BackToTop from "./BackToTop";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Cursor from "./Cursor";
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar/>
        {/* <Cursor/> */}
        <Stars/>
        <BackToTop showBelow={250}/>

          <Switch>
            <Route path="/" exact component={Samantha}/>
            <Route path="/about" exact component={About}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/contact" exact component={Contact}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
