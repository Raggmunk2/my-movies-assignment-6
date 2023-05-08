import React, {useState, useRef} from "react";

export default function Movie(props){
    return (
        {/* <li data-title={props.item.title} data-grade={props.utem.grade}>
            {props.item.title}
            <img src="./images/delete.png" alt="Delete movie" className="delete-movie-icon"/>
            <img src='./images/star.png' alt='Star'/>
            {getStars(props.item.grade)}
        </li> */}
    )
}

function getStars(numOfStars){
    return "<img src='./images/star.png' alt='star'".repeat(numOfStars);
}