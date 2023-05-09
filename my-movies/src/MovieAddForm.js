import React, {useState, useRef} from "react";
import {Container, Form, Button} from 'react-bootstrap';


export default function MovieAddForm({callback}){
    
    const titleRef = useRef();
    const gradeRef = useRef();

    function addMovie(e){
        e.preventDefault();
        console.log(gradeRef.current.value)
        console.log(titleRef.current.value)
        if(titleRef.current.value === "" || gradeRef.current.value === undefined || gradeRef.current.value == 0 || gradeRef.current.value === ""){
            alert("Skriv en titel och ett betyg!");
        }else{
            callback({title: titleRef.current.value, grade: gradeRef.current.value})
            titleRef.current.value = ""
            gradeRef.current.value = 0
            e.target.reset();
        }
    }

    return(
        <div className="container">
            <form id="form" onSubmit={addMovie}>
                <fieldset>
                    <label >Titel:</label>
                    <input className="form-control" placeholder="Lägg till en titel..." ref={titleRef}/>
                    <label >Betyg:</label>
                    <select type="number" className="form-control" ref={gradeRef}>
                        <option value={0}>Välj ett betyg här...</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <button type="submit" className="btn btn-success mt-3">Spara film</button>
                </fieldset>
            </form>

        </div>
    )
}

///onChange={e => setMovies({grade: e.target.value})}