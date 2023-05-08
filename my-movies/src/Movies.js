import React, {useState, useRef} from "react";
import {Container, Form, Button} from 'react-bootstrap';
import Movie from "./Movie";

export default function Movies(movie){


    return (
        <Container className='container'>
            <h1 className='header'>Inlagda filmer</h1>
            <ul>
                <Movie></Movie>

            </ul>
        </Container>
    )
}
