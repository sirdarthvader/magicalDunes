import React, { Component } from 'react'
import './App.css'
import { Particles } from 'react-particles-js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Home from './Components/Pages/Home'
import Projects from './Components/Pages/Projects'
import Blog from './Components/Pages/Blog'
import Skills from './Components/Pages/Skills'
import Contact from './Components/Pages/Contact'
import TwitterFeed from './Components/Pages/TwitterFeed'

// initialise google analytics

import ReactGA from 'react-ga'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bgOption: ''
    }
    this.onclick = this.onclick.bind(this)
  }

  onclick (e) {
    e.preventDefault()
    this.setState({ bgOption: e.target.name })
  }

  render () {
    const { bgOption } = this.state

    const snowParticle = {
      particles: {
        number: {
          value: 160,
          density: {
            enable: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            speed: 4,
            size_min: 0.3
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          random: true,
          speed: 1,
          direction: 'top',
          out_mode: 'out'
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'bubble'
          },
          onclick: {
            enable: true,
            mode: 'repulse'
          }
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            size: 0,
            opacity: 0
          },
          repulse: {
            distance: 400,
            duration: 4
          }
        }
      }
    }

    const starParticle = {
      particles: {
        number: {
          value: 50
        },
        size: {
          value: 3
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          }
        }
      }
    }

    const bubbleParticle = {
      particles: {
        number: {
          value: 160,
          density: {
            enable: false
          }
        },
        size: {
          value: 10,
          random: true
        },
        move: {
          direction: 'bottom',
          out_mode: 'out'
        },
        line_linked: {
          enable: false
        }
      },
      interactivity: {
        events: {
          onclick: {
            enable: true,
            mode: 'remove'
          }
        },
        modes: {
          remove: {
            particles_nb: 10
          }
        }
      }
    }

    let particleOptions

    if (bgOption === 'star') {
      particleOptions = (
        <Particles className='background' params={starParticle} />
      )
    } else {
      if (bgOption === 'bubble') {
        particleOptions = (
          <Particles className='background' params={bubbleParticle} />
        )
      } else {
        particleOptions = (
          <Particles className='background' params={snowParticle} />
        )
      }
    }

    ReactGA.initialize('UA-000000-01');
    ReactGA.pageview(window.location.pathname + window.location.search);
    

    return (
      <Router>
        <div className='container'>
          <div className='App'>
            {particleOptions}
            <Navigation />
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/twitter' component={TwitterFeed} />
            <div className='bg-buttons'>
              <div className='box'>
                <button
                  className='btn btn-primary mb-2'
                  name='snow'
                  onClick={this.onclick}
                >
                  Snow
                </button>
                <button
                  className='btn btn-primary mb-2'
                  name='star'
                  onClick={this.onclick}
                >
                  Star
                </button>
                <button
                  className='btn btn-primary mb-2'
                  name='bubble'
                  onClick={this.onclick}
                >
                  Bubble
                </button>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
