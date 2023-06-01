import React, { useEffect, useState } from 'react'
import SearchSection from '../components/SearchSection'
import SearchResults from '../components/SearchResults'


export default function Results() {
  const [NewMovies, setNewMovies] = useState([])
  const [search, setSearch] =useState("")
  const [load, setload] = useState(false)

  function moveMovies(data){
    setNewMovies(data)
  }

  function moveSearch(search){
    setSearch(search)
  }

  function moveLoad(load){
    setload(load)
  }
  
  console.log(NewMovies)
  console.log(search)
  console.log(load)
  
  return (
    <div>
      <SearchSection moveMovies={moveMovies} moveSearch={moveSearch} moveLoad = {moveLoad}/>
      <SearchResults movies = {NewMovies} search ={search}/>
    </div>
  )
}
