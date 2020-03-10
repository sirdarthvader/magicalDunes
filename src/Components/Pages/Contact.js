import React, { Component } from "react";
import avatar from "./images/avatar.jpeg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-us">
        <div className="jumbotron text-center">
          <img
            className="img-fluid"
            style={{ width: "200px", height: "auto", borderRadius: "50%" }}
            src={avatar}
            alt=""
          />
          <hr style={{ color: "white" }} />
          <h6 className="">
            Email: <a href="mailto:ashishcodes4@gmail.com">ashishcodes4@gmail.com</a>
          </h6>
          <div className="links">
            <div className="github">
              <a
                href="https://github.com/ashishcodes4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square" />
              </a>
            </div>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/ashish-nandan-singh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
            <div className="twitter">
              <a
                href="https://twitter.com/ashishnandansin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter-square" />
              </a>
            </div>
            <div className="medium">
              <a
                href="https://medium.com/@ashishcodes4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-medium" />
              </a>
            </div>
            <div className="freecodecamp">
              <a
                href="https://www.freecodecamp.org/ashishcodes4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-free-code-camp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
