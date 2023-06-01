import React from "react";
import { Link } from "react-router-dom";

export default function Movie({ Poster, Title, Type, Year, imdbID }) {
  return (
    <div className="movie" >
      <Link to={`${imdbID}`}>
        <figure className="movie__img--wrapper">
          <img className="movie__img" src={Poster} alt="" />
        </figure>
      </Link>
      <Link to={`${imdbID}`}>
      <div className="movie__title">{Title}</div>
      </Link>
      <div className="movie__genre">
        <span className="bold">Type:</span> {Type}
      </div>
      <div className="movie__rating">
        <span className="bold">Year:</span> <span className="red">{Year}</span>
      </div>
    </div>
  );
}
