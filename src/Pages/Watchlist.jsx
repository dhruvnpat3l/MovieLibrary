import { useContext, useEffect, useState } from "react"
import { db, firebaseauth } from "../config/store";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { AuthContext } from "../config/Context";
import  Card  from '../components/movie_card'
import { Link } from "react-router-dom";


export default function Watchlist() {
    const [movies, setMovies] = useState(() => {
      const storedMovies = localStorage.getItem("watchlist");
      return storedMovies ? JSON.parse(storedMovies) : [];
    });
    const { user } = useContext(AuthContext);
    const [movielength , setmovieLength] = useState(0);
    console.log(movielength)
    useEffect(() => {
      const fetchData = async () => {
      
        const name = await firebaseauth.currentUser.displayName;
        const starCountRef = ref(db, `users/${name}`);
        onValue(starCountRef, async (snapshot) => {
          const data = snapshot.val();
          if (data && data.watchlist) {
            const movieIds = Object.keys(data.watchlist).map((key) => parseInt(key));
            const result = [];
            for (const movieId of movieIds) {
              const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_TMDB_KEY}`
              );
              const data = await response.json();
  
              const movieData = {
                id: data.id,
                title: data.title,
                poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                releaseDate: data.release_date  ,
              };
            
              result.push(movieData);
            }
            setmovieLength(result.length)
            setMovies(result);
            localStorage.setItem("watchlist", JSON.stringify(result));
          }
        });
      };
  
     fetchData()
    }, [user]);

    if(!user){
      return <div className="mt-8 sm:mt-10 sm:ml-10 md:ml-32 ml-2"> Login First</div>
    }

  
    return (
      <div className="px-4 xl:ml-6">
        {
          movielength > 0 ? 
          
      <div className="grid grid-cols-2 md:pl-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-1.5">
        {movies.map((movie) => (
            // <Card
            // key={movie.id} 
            // id={movie.id}
            // title = {movie.title}
            // date={(new Date(movie.release_date)).getFullYear()} />
            <div className="px-4 xl:ml-6">
              <div className="md:pl-6">

            <Link to={`/moviedetails/${movie.id}`} className="mt-2 sm:pl-12 pl-2 mb-8 grid-cols-1 md:grid-cols-3 md:gap-x-4 md:gap-y-8 ">
                <div className="bg-[#0d1134] rounded  p-2 object-cover w-auto mt-3 shadow-[5px_5px_5px_-0px_rgba(0,0,0,0.3)]">
                    <img src={movie.poster}/>
                </div>
                <div className="">
                    <p className="uppercase font-bold px-px mt-4 text-sm text-black/90 truncate">{movie.title}</p>
                    <p className="px-px flex products-center justify-between mt-4 font-bold"text-lg> {(new Date(movie.releaseDate)).getFullYear()} </p>
                </div>
              </Link>

             {/* bing card boookmark */}
              <Link to={`/moviedetails/${movie.id}`} className="mt-2 sm:pl-12 pl-2 mb-8 grid-cols-1 md:grid-cols-3 md:gap-x-4 md:gap-y-8 relative hidden">
                <div className="bg-[#0d1134] p-2 object-cover w-auto mt-3 shadow-[5px_5px_5px_-0px_rgba(0,0,0,0.3)]">
                  <img src={movie.poster}/>
                </div>
                <div className="">
                  <p className="uppercase font-bold px-px mt-4 text-sm text-black/90 truncate">{movie.title}</p>
                  <p className="px-px flex products-center justify-between mt-4 font-bold text-lg"> {(new Date(movie.releaseDate)).getFullYear()} </p>
                </div>
                {/* <!-- Add a bookmark button with a square icon and a tooltip at the right corner of the card --> */}
                <button className="flex items-center justify-center bg-[#0d1134]  rounded p-2 w-10 h-12 absolute top-0 right-4 shadow-lg focus:outline-none focus:ring focus:ring-offset-2 " aria-label="Bookmark this movie" data-balloon-pos="left">
                  {/* <!-- Use heroicons for the icon --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                  </svg>

                </button>
                </Link>

              </div>

            </div>

            
          
        ))}
       
      </div>
          :
          <div className="mt-8 sm:mt-10 sm:ml-10 md:ml-32 ml-2">
             Add Movie to Watchlist
          </div> 
        }
</div>
    );
  }