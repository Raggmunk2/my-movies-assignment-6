import React, {useState, useRef} from "react";
import {Container, Form, Button} from 'react-bootstrap';
import Movie from "./Movie";

export default function Movies(movieItems){

    function deleteMovie(){

    }

    return (
        <Container className='container'>
            <h1 className='header'>Inlagda filmer</h1>
            <ul className="movie-list">
                {/* {movieItems.map(movie => <Movie key={movie.title} item={movie} deleteMovie={deleteMovie}/>)}
 */}
            </ul>
        </Container>
    )
}
