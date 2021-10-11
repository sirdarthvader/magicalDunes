import React, {Component} from "react"
import "./App.css"
import {Particles} from "react-particles-js"
import {BrowserRouter as Router, Route} from "react-router-dom"
import {starParticle, snowParticle} from "./particleData"
import Navigation from "./Components/Navigation/Navigation"
import Home from "./Components/Pages/Home"
import Projects from "./Components/Pages/Projects"
import Blog from "./Components/Pages/Blog"
import Skills from "./Components/Pages/Skills"
import Contact from "./Components/Pages/Contact"
import TwitterFeed from "./Components/Pages/TwitterFeed"
import Quotes from "./Components/Bits/Quotes"

//lib helper files
import {QUOTES} from "./lib/data/quotes"
import {randomNumber} from "./lib/utils"

// initialise google analytics
import ReactGA from "react-ga"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paramType: null,
      quote: "",
    }
  }

  componentDidMount() {
    //logic for random selection
    let n = Math.floor(Math.random() * 10)
    let paramType = {}

    if (n >= 5) {
      paramType = snowParticle
    } else {
      paramType = starParticle
    }

    //generate quote
    let quote = ""
    let length = QUOTES.length
    let number = randomNumber(0, length)
    quote = QUOTES[number]
    this.setState({
      paramType,
      quote,
    })
  }

  render() {
    const {paramType, quote} = this.state

    ReactGA.initialize("UA-000000-01")
    ReactGA.pageview(window.location.pathname + window.location.search)

    return (
      <Router>
        <>
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
        </>
      </Router>
    )
  }
}

export default App
