import React from 'react';

const Projects = () => {
  return (
    <div className="projects mb-2">
      <div className="card mb-4 project">
        <h5 className="card-header">DevConnector</h5>
        <div className="card-body">
          <h5 className="card-title">
            Social networking website for developers
          </h5>
          <p className="card-text">
            Stack: <br />
            Server: NodeJS/ExpressJS,
            <br />
            FrontEnd: React/Redux
            <br />
            DataBase: MongoDB/MongooseJS/mLab
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://guarded-thicket-68629.herokuapp.com/"
            className="btn btn-dark"
          >
            See Live Website
          </a>
        </div>
      </div>
      <div className="card mb-4 project">
        <h5 className="card-header">StoryBooks</h5>
        <div className="card-body">
          <h5 className="card-title">
            A platform to write and publish stories
          </h5>
          <p className="card-text">
            Stack: <br />
            Server: NodeJS/ExpressJS,
            <br />
            FrontEnd: HandleBars (made using templating engine)
            <br />
            DataBase: MongoDB/MongooseJS/mLab
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ashish-storybook.herokuapp.com/"
            className="btn btn-dark"
          >
            See Live Website
          </a>
        </div>
      </div>
      <div className="card mb-4 project">
        <h5 className="card-header">IdeaJot</h5>
        <div className="card-body">
          <h5 className="card-title">
            Place to scribble ideas and keep them safe for any ongoing project
          </h5>
          <p className="card-text">
            Stack: <br />
            Server: NodeJS/ExpressJS,
            <br />
            FrontEnd: HandleBars (made using templating engine)
            <br />
            DataBase: MongoDB/MongooseJS/mLab
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ashish-ideajot.herokuapp.com/"
            className="btn btn-dark"
          >
            See Live Website
          </a>
        </div>
      </div>
      <div className="card mb-4 project">
        <h5 className="card-header">FaceRecognition Webapp</h5>
        <div className="card-body">
          <h5 className="card-title">
            You can enter the image URL and using AI, this application will be
            able to see if there are any human face's present in the given
            image.
          </h5>
          <p className="card-text">
            Stack: <br />
            Server: NodeJS/ExpressJS,
            <br />
            FrontEnd: React/Router
            <br />
            DataBase: PostgreSQL
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ashishcodes4/faceRecognition1.0.1/tree/master/client"
            className="btn btn-dark"
          >
            See Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
