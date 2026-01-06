
const MovieCard = ({ movies, setFavourite, favourite }) => {

    const handleFavourite = (id) => {

        console.log("id", id)
        // Marking movie as favourite 
        const favMovie = movies.find((movie,index) => {
            if (id === index) {
                return movie;
            }
            
        })
        console.log("movie", favMovie)

        setFavourite((prev) => [...prev, favMovie])
    }

    return (
        <div className="movie-card">
            {
                movies && movies.map((movie, index) => {
                    return (
                        <div key={index}>

                            <div>
                                <button onClick={() => handleFavourite(index)}>Fav</button>
                            </div>
                            <img src={movie.Poster} alt={movie.Title} />


                            <div className="details">
                                <h2> {movie.Title} </h2>

                                <p>Year: {movie.Year}</p>
                            </div>
                            <div className="more">

                                <button>Watch now</button>
                                <button>See More</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MovieCard