import React, { Component } from "react";
// import Typing from "react-typing-animation";

class Home extends Component {
  render() {
    return (
      <div className="home container">
        <div className="display-2">
          Hi{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </div>
        <div
          className="info-text display-4 mb-4"
          style={{ color: "aquamarine" }}
        >
          I am Ashish and I am building cool things for the internet.
        </div>
        <div className="info-text  display-4">
          Currently dreaming and developing solutions @
          <a
            style={{ textDecoration: "underline" }}
            href="https://fabric.inc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fabric
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
