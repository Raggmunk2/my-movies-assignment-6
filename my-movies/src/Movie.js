import React, {useState, useRef} from "react";
import {ListGroupItem} from 'react-bootstrap';


export default function Movie(movie){
    return (
        <ListGroupItem as="li" data-title={movie.title} data-grade={movie.grade}>
            {movie.title}
            <img src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-3d-red-delete-icon-png-image_5142994.jpg" alt="Delete movie" className="delete-movie-icon"/>
            {getStars(movie.grade)}
        </ListGroupItem> 
    )
}

function getStars(numOfStars){
    return "<img src='https://png.pngtree.com/png-clipart/20220926/original/pngtree-shiny-gold-star-clipart-illustration-design-png-image_8633179.png' alt='star'".repeat(numOfStars);
}