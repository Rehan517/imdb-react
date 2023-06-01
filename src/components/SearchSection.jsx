import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";


export default function SearchSection({moveMovies, moveSearch, moveLoad}) {
    const [movies, setMovies] = useState([])
    const [input, setInput] =useState("")
    const [loading, setloading] = useState(false)
    
    // function handleChange(value){
    //     setInput(value)
    // }

    // function onSearch(){
        
    //     fetchMovie(input)
    //     console.log(input)
    //     moveMovies(movies)
    // }

    async function fetchMovies(){
        setloading(true)
        moveLoad(loading)
        const {data} = await axios.get(`https://www.omdbapi.com/?apikey=e5dc4e53&s=${input}`);
        setMovies(data.Search)
        setloading(false)
        moveLoad(loading)
        moveMovies(movies)
        moveSearch(input)
    }

    // useEffect(() =>{
    //     fetchMovie();
        
    // },[])
    // console.log(input)
    
    

    
  return (
    
    <div className="Container__Top--img">
    <nav>
      <div className="nav__container">
      <Link to={"/"}>
        <h2 className="nav__logo">456Movies</h2>
    </Link>
        <ul className="nav__links">
          <li><a href="" className="nav__link link__hover--effect">Home</a></li>
          <li>
            <a href="" className="nav__link nav__link--primary">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="Contianer__search--section">
      <p className="title">Browse <span className="red">Movies</span></p>
      <div className="search__container">
        <input
        className="Search__section"
          type="search"
          placeholder="Search.."
          name=""
          id="mySearch"
        //   value={input}
          onChange ={(event) =>{
            setInput(event.target.value)
          }}
        />
        <button className="search__btn" onClick={()=>fetchMovies()}>GO</button>
        
      </div>
    </div>
  </div>
  );
}


