import Layout from "./components/Layout/Layout"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import HomePage from "./components/Home/HomePage"
import { useEffect, useState } from "react"
const API_KEY = import.meta.env.VITE_OMDB_API_KEY


const App = () => {
  const [movie, setMovie] = useState("")
  const [movies, setMovies] = useState([]);
  const [favourite, setFavourite] = useState([]);
  
  // useEffect(() => {
  //   const movieName = fetch(`http://www.omdbapi.com/?apikey=${API_KEY}/?s=${movie}`).then((response) => response.json)

  //   // cleaning the input field  
  //   return () => setMovie("")
  // }, [movie])

  const handleSearch = async (movie, e) => {
    e.preventDefault();
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`)
    const data = await response.json();
    console.log(data)

    setMovies(data.Search);// All the movies will be inside this array.

    //Resetting the Input field 
    setMovie("");
  }


  return (
    <div className="app">
      <Navbar movie={movie} setMovie={setMovie} handleSearch={handleSearch} favourite={favourite}></Navbar>
      <Layout>
        <div className="main">
          <HomePage movies={movies} setFavourite={setFavourite} favourite={favourite}/>
        </div>
      </Layout>
      <Footer />

    </div>
  )
}

export default App