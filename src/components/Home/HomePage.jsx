import MovieCard from "../Movie/MovieCard"

const HomePage = ({ movies, favourite, setFavourite }) => {
  //  console.log("Movie" , movies)
  return (
    <div className="home"><MovieCard movies={movies} favourite={favourite} setFavourite={setFavourite} /></div>

      
  )
}

export default HomePage