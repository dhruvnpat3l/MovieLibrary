import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { db, firebaseauth } from "../config/store";
import { get, ref } from "firebase/database";
import { AuthContext } from "../config/Context";


export default function MovieDetails(){

    const [movieDetails, setmovieDetails] = useState(null);
    const { movieid } = useParams();
   
    const {writeUserData,onBookmark,removeBookmark,isAddedToWatchlist,setIsAddedToWatchlist} = useContext(AuthContext);

    useEffect( () => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${import.meta.env.VITE_TMDB_KEY}`)
             .then(response => setmovieDetails(response.data))
             .catch(error => console.log('error fetching movie details: ',error));

             const checkIfAddedToWatchlist = async () => {
              const name = await firebaseauth.currentUser.displayName;
              const starCountRef = ref(db, `users/${name}/watchlist/${movieid}`);
              get(starCountRef).then((snapshot) => {
                if (snapshot.exists()) {
                  setIsAddedToWatchlist(true);
                } else {
                  setIsAddedToWatchlist(false);
                }
              });
            };
            checkIfAddedToWatchlist();
    },[]);

    if(!movieDetails){
        return <div>Loading ... {console.log(movieid)}</div>
    }
    

    return(

      //   <div className="p-4">
      //   <h1 className="text-3xl font-bold">{movieDetails.title}</h1>
      //   <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} className="my-4" />
      //   <p className="my-4">{movieDetails.overview}</p>
      //   <ul>
      //     <li className="my-2"><strong>Release date:</strong> {movieDetails.release_date}</li>
      //     <li className="my-2"><strong>Runtime:</strong> {movieDetails.runtime} minutes</li>
      //     <li className="my-2"><strong>Rating:</strong> {movieDetails.vote_average} / 10</li>
      //   </ul>
      // </div>

      // <!-- Use a card component with a gradient background and rounded corners -->
<div class=" mx-10 md:ml-40 md:mr-10 bg-white  rounded mt-10 md:mt-0 mb-28 shadow-md overflow-hidden md:max-w-5xl ">
  {/* <!-- Use a flex layout with a row direction for the card content --> */}
  <div class="sp:flex">
    {/* <!-- Use a flex item for the image with a fixed width and a clip path --> */}
    <div class="bg-[#0d1134] sp:flex rounded  p-2 object-cover min-w-fit">
      <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} class="h-full object-cover  sp:w-48 clip-path[polygon(0%_0%,_100%_0%,_75%_100%,_0%_100%)]" />
    </div>
    {/* <!-- Use another flex item for the text content with some margin and padding --> */}
    <div class="p-8">
      <h1 class="text-3xl font-bold text-[#0d1134]">{movieDetails.title}</h1>
      <p class="my-4 text-[#0d1134]">{movieDetails.overview}</p>
      <ul>
        <li class="my-2 text-[#0d1134]"><strong>Release date:</strong> {movieDetails.release_date}</li>
        <li class="my-2 text-[#0d1134]"><strong>Runtime:</strong> {movieDetails.runtime} minutes</li>
        {/* vote average */}
        <li class="my-2 text-[#0d1134]"><strong>Rating:</strong> {movieDetails.vote_average} / 10</li>
    {/* add to watchlist */}
    <div className="pt-4 pb-4">
                        
                        
                          {isAddedToWatchlist ? 
                            <> 
                            <div
                            className="group relative inline-block focus:outline-none "
                        >
                            <span
                              className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#0d1134] transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                            ></span>
                            <a onClick={() => removeBookmark(movieid)} src="df"
                              className="bg-white relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                              
                            >
                              Remove
                            </a>
                        </div>
                            </>
                          :
                          <>
                             <div
                            className="group relative inline-block focus:outline-none "
                        >
                            <span
                              className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#0d1134] transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                            ></span>
                            <a onClick={() => onBookmark(movieid)} src="df"
                              className="bg-white relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                              
                            >
                              Add to watchlist
                            </a>
                        </div>
                          </>
                          }
                        
                    </div>

      </ul>
    </div>
  </div>
</div>
    )
}