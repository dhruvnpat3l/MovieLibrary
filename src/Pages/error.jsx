import React from "react";
import gif from '../assets/error.gif'
import { useRouteError } from "react-router-dom";

// error page 
export default function Error() {
    const error = useRouteError();
    return(
        <div className="flex justify-center items-center h-screen">
            <img src={gif} alt="Example Gif" />
            <p>
                <i> {error.statusText || error.message} </i>
            </p>
        </div>
    )
}