import './App.css';
import Samantha from "./Samantha";
import Stars from "./Stars";
import BackToTop from "./BackToTop";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar/>
        <Stars/>
        <BackToTop showBelow={250}/>

          <Switch>
            <Route path="/" exact component={Samantha}/>
            <Route path="/about" exact component={About}/>
            <Route path="/projects" exact component={Projects}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
