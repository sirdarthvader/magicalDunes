import React from 'react';
import avatar from './images/avatar.jpeg';
import { SOCIAL_LINKS } from '../../constants/links';

const Contact = () => {
  return (
    <div className="contact-us">
      <div className="jumbotron text-center">
        <img
          className="img-fluid"
          style={{ width: '200px', height: 'auto', borderRadius: '50%' }}
          src={avatar}
          alt=""
        />
        <hr style={{ color: 'white' }} />
        <h6 className="">
          Email: <a href={SOCIAL_LINKS.mail}>ashishcodes4@gmail.com</a>
        </h6>
        <div className="links">
          <div className="github">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square" />
            </a>
          </div>
          <div className="linkedin">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <div className="twitter">
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter-square" />
            </a>
          </div>
          <div className="medium">
            <a
              href={SOCIAL_LINKS.medium}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-medium" />
            </a>
          </div>
          <div className="freecodecamp">
            <a
              href={SOCIAL_LINKS.freecodecamp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-free-code-camp" />
            </a>
          </div>
          <div className="stackoverflow">
            <a
              href={SOCIAL_LINKS.stackoverflow}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-stack-overflow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
