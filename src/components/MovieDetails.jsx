import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export default function MovieDetails(){

    const [movieDetails, setmovieDetails] = useState(null);
    const { movieid } = useParams();

    useEffect( () => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${import.meta.env.VITE_TMDB_KEY}`)
             .then(response => setmovieDetails(response.data))
             .catch(error => console.log('error fetching movie details: ',error));
    },[movieid]);

    if(!movieDetails){
        return <div>Loading ... {console.log(movieid)}</div>
    }
    return(

        <div className="p-4">
        <h1 className="text-3xl font-bold">{movieDetails.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} className="my-4" />
        <p className="my-4">{movieDetails.overview}</p>
        <ul>
          <li className="my-2"><strong>Release date:</strong> {movieDetails.release_date}</li>
          <li className="my-2"><strong>Runtime:</strong> {movieDetails.runtime} minutes</li>
          <li className="my-2"><strong>Rating:</strong> {movieDetails.vote_average} / 10</li>
        </ul>
      </div>
    )
}