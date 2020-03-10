import React, { Component } from "react";
import canvas from "./images/canvas.jpeg";
import dom from "./images/dom.jpeg";
import github from "./images/github.jpg";
import reactFir from "./images/reactFir.jpeg";
import reactHer from "./images/reactHer.jpeg";

class Blog extends Component {
  render() {
    const raectFirebase =
      "https://medium.freecodecamp.org/react-and-firebase-are-all-you-need-to-host-your-web-apps-f7ab55919f53";
    const canvasSunday =
      "https://medium.freecodecamp.org/sunday-with-canvas-element-and-javascript-38ae80e0fbeb";
    const domJS =
      "https://medium.freecodecamp.org/learn-how-to-manipulate-the-dom-by-building-a-simple-javascript-color-game-1a3aec1d109a";
    const reactHeroku =
      "https://medium.freecodecamp.org/how-to-deploy-a-react-app-with-an-express-server-on-heroku-32244fe5a250";
    const gitHub =
      "https://codeburst.io/git-version-control-system-github-54f4c2755372";
    return (
      <div className="blog">
        <div className="card-deck mb-3 ">
          <div className="card article">
            <img className="card-img-top" src={reactFir} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">
                React and Firebase are all you need to host your web apps
              </h5>
              <p className="card-text">
                Highlights the process of creating a basic react application and
                deploying it to the firbase hosting platform.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                <a
                  href={raectFirebase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  Read More
                </a>
              </small>
            </div>
          </div>
          <div className="card article">
            <img className="card-img-top" src={canvas} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Canvas element and JavaScript</h5>
              <p className="card-text">
                Read to know a few things about the canvas element, how to
                change and use canvas element with the help of javascript to
                make the most out of it.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                <a
                  href={canvasSunday}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  Read More
                </a>
              </small>
            </div>
          </div>

          <div className="card article">
            <img className="card-img-top" src={github} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Git, Github and Version Control</h5>
              <p className="card-text">
                Using Git is not enough, you need to adap to it. A thorough read should
                clear any confusions around Git and version control.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                <a
                  href={gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  Read More
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="card-deck mb-3">
          <div className="card article">
            <img className="card-img-top" src={reactHer} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">
                CRA with node/express server deployed on heroku
              </h5>
              <p className="card-text">
                Highlights the process of creating a basic react application
                served from a Node/express server and further deploying it to the Heroku
                hosting platform.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                <a
                  href={reactHeroku}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  Read More
                </a>
              </small>
            </div>
          </div>

          <div className="card article">
            <img className="card-img-top" src={dom} alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Color game using javaScript</h5>
              <p className="card-text">
                This is more of a tutorial on how to create a simple color
                guessing game using vanilla javaScript and no frmaworks or
                library whatsoever. Quite a simple game but uses some very
                important and basic javaScript elements.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                <a
                  href={domJS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  Read More
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
