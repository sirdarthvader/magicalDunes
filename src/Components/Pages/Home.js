import React, { Component } from "react";
import Typing from "react-typing-animation";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h3 className="display-1">
          Hi <span id="emoji-sign">👋</span>
        </h3>
        <h5 style={{ color: "white" }}>
          I am Ashish and I am a software developer.
        </h5>
        <h6>
          Currently dreaming and developing solutions @
          <a
            href="https://fabric.inc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fabric
          </a>
        </h6>
      </div>
    );
  }
}

export default Home;
