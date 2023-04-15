import { Routes,Route, useNavigate } from "react-router-dom";
import logo from "../assets/images/movie_blue_logo.jpg"

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
        <div className="relative">
            {/* logo for android */}
            <nav className="z-10 md:hidden fixed top-0 left-0 right-0 flex items-center h-max mx-auto text-slate-800 bg-white text-lg shadow-md">
                    <a><img className="h-16" src={logo} /></a>
                        <ul className="flex">
                            <li className="p-4" >
                            <div class='mx-6 max-w-md sm:mx-auto'>
                <form onSubmit={handleSubmit} class="md:ml-28 relative flex items-center w-full h-12 rounded-lg shadow-lg bg-white">
                    <div class="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#0d1134" className="w-5 h-5">
  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
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
                            </li>
                            
                        </ul>
                </nav>
                <div>
            {/*searchbar  */}
            <div class='hidden md:block mx-6 mt-6 max-w-md sm:mx-auto'>
                <form onSubmit={handleSubmit} class="md:ml-28 mt-4 relative flex items-center w-full h-12 rounded-lg shadow-lg bg-white overflow-hidden">
                    <div class="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#0d1134" className="w-5 h-5">
  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
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
        </div>
    )
}