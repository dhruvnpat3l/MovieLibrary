import {  useNavigate } from "react-router-dom";
import Logo from '../assets/images/theater.png'
import Searchlogo from '../assets/images/magnifier.png'
import { useState } from "react";

export default function SearchBar() {

    const [query ,setQurey ] = useState("");
    const history = useNavigate;

    const handleInputChange = (event)=> {
        setQurey(event.target.value)
    }
    const handleSearch = (e) => {
        e.preventDefault();
        if (query) {
            history(`search/${query}`)
        }
    }

    return(
        <>
            <div className="w-full h-16 ">
                <form className="" onSubmit={handleSearch}>    
                    <div className="relative px-8 pt-2 ">
                        <input type="search" id="default-search" onChange={handleInputChange} className="w-full p-4 pl-10 pr-24 text-lg font-rubik text-black border-2 border-black rounded-lg " placeholder="Search"/>
                        <button type="submit" className=" absolute right-2.5 bottom-2.5  px-10 py-2 ">
                            <img src={Searchlogo} className="w-6"/>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}