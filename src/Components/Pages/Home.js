import React, { Component } from 'react'
import Typing from 'react-typing-animation'


class Home extends Component {
  render () {
    return (
      <div className='home'>
        <div className='jumbotron'>
          <h1 className='display-1'>Hello, world!</h1>
          <h5 style={{ color: 'white' }}>
            I am Ashish and I am a javaScript developer.
          </h5>
          <span>I am currently working on:</span>
          <Typing>
            <br />
            <ul>
              <li>React</li>
              <li>Node JS</li>
              <li>JavaScript</li>
              <li>ExpressJS</li>
            </ul>
          </Typing>
        </div>
      </div>
    )
  }
}

export default Home
