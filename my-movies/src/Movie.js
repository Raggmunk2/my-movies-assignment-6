import React, {useState, useRef} from "react";
import {ListGroupItem} from 'react-bootstrap';


export default function Movie(movie){
    return (
        <ListGroupItem as="li" data-title={movie.title} data-grade={movie.grade}>
            {movie.title}
            <img src="./images/delete.png" alt="Delete movie" className="delete-movie-icon"/>
            {getStars(movie.grade)}
        </ListGroupItem> 
    )
}

function getStars(numOfStars){
    return "<img src='images/star.png' alt='star'".repeat(numOfStars);
}