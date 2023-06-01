import React, { useEffect, useState } from "react";
import Movie from "./UI/Movie";

export default function SearchResults({ movies, search }) {
  

  return (
    <div>
      <div className="filter__container">
        <h2 className="results__text">
          Search Results for: <span className="red">{search}</span>
        </h2>
      </div>

      <div className="movies__container">
        <div className="movies__overlay movies__Loading">
          <i className="fas fa-spinner "></i>
        </div>
        <div className="movies">
          {movies
            ? movies.map((movie) => (
                <Movie 
                Poster = {movie.Poster}
                Title={movie.Title}
                Type={movie.Type}
                Year={movie.Year}
                imdbID = {movie.imdbID}
                key={movie.imdbID}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
