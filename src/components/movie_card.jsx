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
              <Link to={`/moviedetails/${props.id}`} className="pl-12 mb-8 border-b-2  grid-cols-1 md:grid-cols-3 md:gap-x-4 md:gap-y-8 ">
                <div className="bg-blue-950  p-2 object-cover w-5/6 mt-3 shadow-[5px_5px_5px_-0px_rgba(0,0,0,0.3)]">
                    <img src={props.image}/>
                </div>
                <div className="">
                    <p className="uppercase font-bold px-px mt-4 text-sm text-black/90 truncate">{props.title}</p>
                    <p className="px-px flex products-center justify-between mt-4 font-bold"text-lg> {props.date} </p>
                </div>
              </Link>
                
            </>
        )
}