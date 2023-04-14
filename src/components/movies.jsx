import axios from "axios";
import { useEffect, useState } from "react"

import  Card from './movie_card'

export default function Movies() {

    const [movies, setmovies] = useState([]);
    const [page,setPage] = useState(1);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${page}`)
        .then((response) => {
            setmovies(response.data.results);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [page])

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber)
    }

    return(
        <div className="px-4 xl:ml-6">
            <div className="grid grid-cols-2 md:pl-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-1.5">
              {movies.map((movie) => (
                  <Card
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