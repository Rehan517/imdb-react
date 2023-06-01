import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import "../App.css";

export default function MovieInfo() {
  const { imdbID } = useParams();
  const [loading, setLoading] = useState(false);

  //   console.log(imdbID)
  const [movieInfo, setMovieInfo] = useState([]);

  async function fetchMovieData() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=e5dc4e53&i=${imdbID}`
    );
    setMovieInfo(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovieData();
    console.log(movieInfo);
  }, []);

  return (
    <div className="movieInfo">
      <Nav />

      {loading ? (
        <div className="movieInfo__container">
          <div className="img__skeleton--container"></div>
          <div>
            <div className="title__skeleton"></div>
            <div className="para__skeleton"></div>
          </div>
        </div>
      ) : (
        <div className="movieInfo__container">
          <figure className="movie__img--container">
            <img src={movieInfo.Poster} className="movie__selected--img"></img>
          </figure>
          <div className="movie__details">
            <h1 className="movieTitle">{movieInfo.Title}</h1>
            <p className="moviePlot">{movieInfo.Plot}</p>
            <p className="movieActors">
              <span className="bold">Actor:</span> {movieInfo.Actors}
            </p>
            <p className="movieActors">
              <span className="bold">Director:</span> {movieInfo.Director}
            </p>
            <p className="movieActors">
              <span className="bold">Release Data:</span> {movieInfo.Released}
            </p>
            <div className="movieAtributes">
              <p className="movieActors">
                <span className="bold">Language:</span> {movieInfo.Language}
              </p>
              <p className="movieActors movieImdb">
                <span className="bold">imdb Rating:</span>{" "}
                {movieInfo.imdbRating}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
