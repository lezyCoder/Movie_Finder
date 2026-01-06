
const Navbar = ({ movie, setMovie, handleSearch, favourite }) => {

    const showFavourite = () => {
        console.log(favourite)
    }
    return (
        <div>
            <nav>
                <div className="logo">
                    <h1>Dekho  Movie</h1>
                </div>

                <div className="search">
                    <form action="" onSubmit={(e) => handleSearch(movie, e)}>
                        <input type="text" placeholder='Search movie' value={movie} onChange={(e) => setMovie(e.target.value)} />
                        <button className="btn" type='submit'>Search</button>
                    </form>
                </div>

                <div className='fav'>
                    <button className="btn" onClick={showFavourite} >Fav</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar