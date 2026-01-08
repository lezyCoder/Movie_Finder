import MovieCard from "../Movie/MovieCard";

const HomePage = ({ movies, favourite, setFavourite }) => {
  //  console.log("Movie" , movies)
  if (!movies.length) {
    return <p className="text">All movies will be shown here 🎥</p>;
  }

  return (
    <div className="home">
      <MovieCard
        movies={movies}
        favourite={favourite}
        setFavourite={setFavourite}
      />
    </div>
  );
};

export default HomePage;
