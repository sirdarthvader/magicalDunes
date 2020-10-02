import React from "react";
import PropTypes from "prop-types";

function Quotes({ data }) {
  return (
    <footer class="footer container">
      <div class="">
        <blockquote class="blockquote text-right">
          <p class="mb-0">{data.quote}</p>
          <footer class="blockquote-footer">
            {data.author} <cite title="Source Title">{data.source}</cite>
          </footer>
          <footer class="text-muted text-left">
            Made with{" "}
            <span role="img" aria-label="heart emoji">
              ❤️
            </span>{" "}
            in India
          </footer>
        </blockquote>
      </div>
    </footer>
  );
}

Quotes.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Quotes;
