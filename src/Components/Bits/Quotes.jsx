import React from "react";
import PropTypes from "prop-types";

function Quotes({ data }) {
  return (
    <footer className="footer container">
      <div className="">
        <blockquote className="blockquote text-right">
          <p className="mb-0">{data.quote}</p>
          <footer className="blockquote-footer">
            {data.author} <cite title="Source Title">{data.source}</cite>
          </footer>
          <footer className="text-muted text-left">
            Made with{" "}
            <span role="img" aria-label="heart emoji">
              ❤️" "
            </span>{" "}
            in India
          </footer>
        </blockquote>
      </div>
    </footer>
  );
}

Quotes.propTypes = {
  data: PropTypes.object,
};

export default Quotes;
