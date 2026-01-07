import { useParams } from "react-router-dom";
import MovieCard from "../Movie/MovieCard";

const Detailspage = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((movie) => movieId === movie.imdbID);
  const similarMovies = movies
    .filter((movie) => movieId !== movie.imdbID)
    .slice(5, 7);// add other logic not the hardcoded one here fix the ui also 
    
  console.log("similarMovies:", similarMovies);
  return (
    <div className="details-page">
      <div className="show-details">
        <div className="img">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="right-content ">
          <div className="movie-info">
            <h1>{movie.Title}</h1>
            <p>Year: {movie.Year}</p>
          </div>

          <div className="action-btn">
            <button>Download</button>
          </div>
        </div>
      </div>
      {/* similar movies */}
      <section>
        <h3>You may like this </h3>
        <div className="similar_movies">
          <MovieCard movies={similarMovies} />
        </div>
      </section>
    </div>
  );
};

export default Detailspage;
