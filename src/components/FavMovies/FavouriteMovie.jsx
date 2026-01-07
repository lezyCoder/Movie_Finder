
import MovieCard from '../Movie/MovieCard'

const FavouriteMovie = ({ favourite }) => {
    console.log(favourite)
    return (
        <div className='fav-page'>

            <h1>Favourite Movie</h1>
            <div className="movies">
                {
                    favourite && favourite.map((index) => {
                        return (
                            <MovieCard movies={favourite} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FavouriteMovie