import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie_card from "../components/movie_card";

export default function Search() {

    const [searchResults, setSearchResults] = useState([]);

    const { query } = useParams();
        useEffect(() => {
            axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&query=${query}`
            )
            .then((Response) => {
                setSearchResults(Response.data.results)
            })
            .catch((error)=>{
                console.log(error);
            } )
        },);

 
        return(
            <div>
                {
                    searchResults.length === 0 ? (
                        <p>No result found for {query}</p>
                    ):(
                          <div className="px-4 xl:ml-40">
                            <div className="grid grid-cols-2  sm:grid-cols-2  lg:grid-cols-4 gap-4 m-1.5">
                                {searchResults.map((movie) => (
                                    <Movie_card
                                    key={movie.id} 
                                    id={movie.id}
                                    image ={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    title = {movie.title}
                                    date={(new Date(movie.release_date)).getFullYear()} />
                                ))}
                            </div>
                         </div>
                    )
                }     
            </div>
        )

}