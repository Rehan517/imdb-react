import "./App.css";
import MovieInfo from "./pages/MovieInfo";
import Results from "./pages/Results";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path ="/" element ={<Results/>} />
          <Route path =":imdbID" element = {<MovieInfo/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
