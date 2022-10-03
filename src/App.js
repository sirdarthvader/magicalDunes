import React, {Component} from "react"
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Pages/Home"
import Projects from "./Components/Pages/Projects"
import Blog from "./Components/Pages/Blog"
import Skills from "./Components/Pages/Skills"
import Contact from "./Components/Pages/Contact"
import TwitterFeed from "./Components/Pages/TwitterFeed"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paramType: null,
      quote: "",
    }
  }

  render() {
    return (
      <Router>
        <>
          <div className="App">
            <Home/>
            <Routes>
            <Route  path="/" element={Home} />
            <Route  path="/projects" element={Projects} />
            <Route  path="/blog" element={Blog} />
            <Route  path="/skills" element={Skills} />
            <Route  path="/contact" element={Contact} />
            <Route  path="/twitter" element={TwitterFeed} />
            </Routes>
          </div>
        </>
      </Router>
    )
  }
}

export default App
