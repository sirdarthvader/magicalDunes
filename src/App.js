import React, { Component } from "react";
import "./App.css";
import { Particles } from "react-particles-js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { starParticle, bubbleParticle, snowParticle } from "./particleData";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Pages/Home";
import Projects from "./Components/Pages/Projects";
import Blog from "./Components/Pages/Blog";
import Skills from "./Components/Pages/Skills";
import Contact from "./Components/Pages/Contact";
import TwitterFeed from "./Components/Pages/TwitterFeed";

// initialise google analytics

import ReactGA from "react-ga";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paramType: null,
    };
  }

  componentDidMount() {
    //logic for random selection
    let n = Math.floor(Math.random() * 10);
    let paramType = {};

    if (n <= 3) {
      paramType = starParticle;
    } else if (n <= 6) {
      paramType = bubbleParticle;
    } else {
      paramType = snowParticle;
    }
    this.setState({
      paramType,
    });
  }

  render() {
    const { paramType } = this.state;

    ReactGA.initialize("UA-000000-01");
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <Router>
        <div className="container">
          <div className="App">
            <Particles className="background" params={paramType} />
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/twitter" component={TwitterFeed} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
