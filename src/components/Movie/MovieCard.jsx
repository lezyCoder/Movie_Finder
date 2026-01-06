import { FaRegHeart } from "react-icons/fa";

const MovieCard = ({ movies, setFavourite, favourite }) => {
  const handleFavourite = (movie) => {
    if (favourite.some((fav) => fav.imdbID === movie.imdbID)) {
      alert("Already in favourites");
      return;
    }
    setFavourite((prev) => [...prev, movie]);
  };

  return (
    <>  
      {movies && movies.map((movie) => (
        <div className="movie-card" key={movie.imdbID}>
          <div className="fav-icon" onClick={() => handleFavourite(movie)}>
            <FaRegHeart />
          </div>

          <img src={movie.Poster} alt={movie.Title} />

          <div className="details">
            <h2>{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
          </div>

          <div className="actions-btn">
            <button>Watch now</button>
            <button>See More</button>
          </div>
        </div>
      ))}
    </>
  );
};


export default MovieCard;