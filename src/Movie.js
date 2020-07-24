import React from "react";
import propTypes from "prop-types";

function Movie({ key, id, year, title, summary, poster }) {
  return (
    <div>
      <h4>{title}</h4>
      <h2>{year}</h2>
      <img src={poster} alt={id}></img>
      <h2>{summary}</h2>
    </div>
  );
}

Movie.prototype = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
};
export default Movie;
