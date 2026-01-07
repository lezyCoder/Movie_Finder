import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movies, setFavourite, favourite }) => {

  const navigate = useNavigate();

  const handleFavourite = (e,movie) => {
       e.stopPropagation();
    if (favourite.some((fav) => fav.imdbID === movie.imdbID)) {
      alert("Already in favourites");
      return;
    }
    setFavourite((prev) => [...prev, movie]);
  };

  const handleNavigate = (e,movieID) => {
    e.stopPropagation();
    navigate(`/movie/${movieID}`)
  }
  
  return (
    <>
      {movies && movies.map((movie) => (
        <div className="movie-card" key={movie.imdbID} onClick={(e) => handleNavigate(e,movie.imdbID)} >
          <div className="fav-icon" onClick={(e) => handleFavourite(e,movie)}>
            <FaRegHeart />
          </div>

          <img src={movie.Poster} alt={movie.Title} />

          <div className="details">
            <h2>{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
          </div>

          <div className="actions-btn">
            <button>Watch now</button>
            <button onClick={(e) => handleNavigate(e,movie.imdbID)}>See More</button>
          </div>
        </div>
      ))}
    </>
  );
};


export default MovieCard;