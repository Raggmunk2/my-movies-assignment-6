import React from "react";
import deleteBtn from './/images/delete.png'
import star from './/images/star.png'


export default function Movie(props){
    
    return (
        <li className="list-group-item" data-title={props.item.title} data-grade={props.item.grade}>
            {props.item.title}
            
            <img src={deleteBtn} alt="Delete movie" className="delete-movie-icon" onClick={() => props.deleteMovie(props.item.title)}/>
            <img src="https://w7.pngwing.com/pngs/134/138/png-transparent-star-golden-stars-angle-3d-computer-graphics-symmetry-thumbnail.png" alt='star'/>
            {`<img src='/images/star.png' alt='Star'/>`.repeat(props.item.grade)}
        </li> 
    )
        
}

function getStars(numOfStars){
    
    /* let starElement = `<img src='https://w7.pngwing.com/pngs/134/138/png-transparent-star-golden-stars-angle-3d-computer-graphics-symmetry-thumbnail.png' alt='star'/>`
    return starElement.repeat(numOfStars); */
    return "<img src='https://w7.pngwing.com/pngs/134/138/png-transparent-star-golden-stars-angle-3d-computer-graphics-symmetry-thumbnail.png' alt='Star'>".repeat(numOfStars);
}