import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Navbar = ({ movie, setMovie, handleSearch, favourite }) => {
  const showFavourite = () => {
    console.log(favourite);
  };
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>Dekho Movie</h1>
        </div>

        <div className="search">
          <form action="" onSubmit={(e) => handleSearch(movie, e)}>
            <input
              type="text"
              placeholder="Search movie"
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
            />
            <div className="search-btn">
              <IoSearchSharp />
            </div>
          </form>
        </div>

        <div className="fav" onClick={showFavourite}>
          <FaRegHeart />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
