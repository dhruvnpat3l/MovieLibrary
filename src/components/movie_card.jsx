import { Link } from "react-router-dom";

import { Favorite, PropaneSharp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useState } from "react";
export default function Movie_card(props) {

    const [isFavorite, setIsFavorite] = useState(false);
    
    const handleFaviorateClick = () =>{
        setIsFavorite(!isFavorite)
    }
        return(
            <>
              <Link to={`/moviedetails/${props.id}`} className="mt-2 sm:pl-12 pl-2 mb-8 grid-cols-1 md:grid-cols-3 md:gap-x-4 md:gap-y-8 ">
                <div className="bg-[#0d1134] rounded  p-2 object-cover w-auto mt-3 shadow-[5px_5px_5px_-0px_rgba(0,0,0,0.3)]">
                    <img src={props.image}/>
                </div>
                <div className="">
                    <p className="uppercase font-bold px-px mt-4 text-sm text-black/90 truncate">{props.title}</p>
                    <p className="px-px flex products-center justify-between mt-4 font-bold"text-lg> {props.date} </p>
                </div>
              </Link>

              {/* bing card boookmark */}
              <Link to={`/moviedetails/${props.id}`} className="mt-2 sm:pl-12 pl-2 mb-8 grid-cols-1 md:grid-cols-3 md:gap-x-4 md:gap-y-8 relative hidden">
                <div className="bg-[#0d1134] p-2 object-cover w-auto mt-3 shadow-[5px_5px_5px_-0px_rgba(0,0,0,0.3)]">
                  <img src={props.image}/>
                </div>
                <div className="">
                  <p className="uppercase font-bold px-px mt-4 text-sm text-black/90 truncate">{props.title}</p>
                  <p className="px-px flex products-center justify-between mt-4 font-bold text-lg"> {props.date} </p>
                </div>
                {/* <!-- Add a bookmark button with a square icon and a tooltip at the right corner of the card --> */}
                <button className="flex items-center justify-center bg-[#0d1134]  rounded p-2 w-10 h-12 absolute top-0 right-4 shadow-lg focus:outline-none focus:ring focus:ring-offset-2 " aria-label="Bookmark this movie" data-balloon-pos="left">
                  {/* <!-- Use heroicons for the icon --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                  </svg>

                </button>
              </Link>
                
            </>
        )
}