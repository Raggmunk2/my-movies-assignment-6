import React from "react";
import deleteBtn from './/images/delete.png'
import star from './/images/star.png'


export default function Movie(props){

    return (
        <li className="list-group-item" data-title={props.item.title} data-grade={props.item.grade}>
            {props.item.title}
            
            <img src={deleteBtn} alt="Delete movie" className="delete-movie-icon" onClick={() => props.deleteMovie(props.item.title)}/>
           {Array.from({length: props.item.grade}, (_,i) => <img src={star} alt='star' key={i}/>)}
        </li> 
    )
        
}
