import React, {useState, useRef} from "react";
import {Container, ListGroup} from 'react-bootstrap';
import Movie from "./Movie";

export default function Movies(movieItems){

    function deleteMovie(){

    }
    
    return (
        <Container className='container'>
            <h1 className='header'>Inlagda filmer</h1>
           <ListGroup as="ul" className="movie-list">
                <Movie key={movieItems.title} item={movieItems} deleteMovie={deleteMovie}/>
            {/*                 {movieItems.map(movie => <Movie key={movie.title} item={movie} deleteMovie={deleteMovie}/>)}*/}
            </ListGroup>
        </Container>
    )
}
