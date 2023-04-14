import { Routes,Route, useNavigate } from "react-router-dom";

import Searchlogo from '../assets/images/magnifier.png'

import Movies from "../components/movies";
import MovieDetails from "../components/MovieDetails";
import Login from '../auth/Login'

import { useState } from "react";
import Search from "./Search";
import Sidebar from "../components/sidebar";
import SearchBar from "../components/Search_bar";

export default function Home() {
    
    const [query, setQuery ]= useState("");
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        history(`/search/${query}`)
    }
    

    return(
        <div className="">

            {/*searchbar  */}
            <div class=' mt-6 max-w-md mx-auto'>
                <form onSubmit={handleSubmit} class="md:ml-28 mt-4 relative flex items-center w-full h-12 rounded-lg shadow-lg bg-white overflow-hidden">
                    <div class="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                    class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search something.." /> 
                </form>
            </div>

            {/* sidebar */}
          <div className="">
                <Sidebar/>
          </div>
            <div className="md:pl-36 pt-16">
                <Routes>
                    <Route path='/' element={<Movies/>}/>
                    <Route path='/moviedetails/:movieid' element={<MovieDetails/>}/> 
                    <Route path='/search/:query'element={<Search/>} />
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
            
        </div>
    )
}