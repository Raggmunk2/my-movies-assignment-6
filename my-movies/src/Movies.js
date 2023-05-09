import React, {useState, useRef} from "react";
import Movie from "./Movie";

export default function Movies(movieItems){

    function deleteMovie(){

    }
    
    return (
        <div className='container'>
            <h1 className='header'>Inlagda filmer</h1>
           <ul  className="list-group">
                <Movie key={movieItems.title} item={movieItems} deleteMovie={deleteMovie}/>
            {/*                 {movieItems.map(movie => <Movie key={movie.title} item={movie} deleteMovie={deleteMovie}/>)}*/}
            </ul>
        </div>
    )
}
