
import MovieCard from '../Movie/MovieCard'

const FavouriteMovie = ({ favourite }) => {
    return (
        <div>

            <div>Favourite Movie</div>
            {
                favourite && favourite.map((index) => {
                    return (
                        <MovieCard movies={favourite} />
                    )
                })
            }
        </div>
    )
}

export default FavouriteMovie