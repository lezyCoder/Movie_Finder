import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import HomePage from "./components/Home/HomePage"
import Detailspage from "./components/Details/Detailspage"
import { useEffect, useState } from "react"
import FavouriteMovie from './components/FavMovies/FavouriteMovie'
const API_KEY = import.meta.env.VITE_OMDB_API_KEY


const App = () => {
  const [movie, setMovie] = useState("")
  const [movies, setMovies] = useState([]);
  const [favourite, setFavourite] = useState([]);


  const handleSearch = async (movie, e) => {
    e.preventDefault();
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`)
    const movieData = await response.json();
    console.log(movieData)

    setMovies(movieData.Search);// All the movies will be inside this array.

    //Resetting the Input field 
    setMovie("");
  }


  return (
    <Router>
      <div className="app">
        <Navbar movie={movie} setMovie={setMovie} handleSearch={handleSearch} favourite={favourite} />
        <Layout>
          <Routes>
            <Route index element={<HomePage movies={movies} setFavourite={setFavourite} favourite={favourite} />} />
            <Route path="/movie/:movieId" element={< Detailspage movies={movies} />} />
            <Route path='/favourite_movies' element={<FavouriteMovie  favourite={favourite}/>} />
          </Routes>
        </Layout>
        <Footer />
      </div>
    </Router>
  )
}

export default App