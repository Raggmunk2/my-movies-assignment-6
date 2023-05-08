import React, {useState, useRef} from "react";
import {Container, Form, Button} from 'react-bootstrap';


export default function MovieAddForm({callback}){
    const [movies, setMovies] = useState([{
        title: "",
        grade: 0,
    }]);
    const titleRef = useRef();
    const gradeRef = useRef();

    function addMovie(e){
        e.preventDefault();
        console.log(gradeRef.current.value)
        console.log(titleRef.current.value)
        if(titleRef.current.value === "" || gradeRef.current.value === undefined || gradeRef.current.value == 0 || gradeRef.current.value === ""){
            alert("Skriv en titel och ett betyg!");
        }else{
            setMovies( {

                title: titleRef.current.value,
                grade: gradeRef.current.value,
            
            })
            console.log(movies)
            callback(movies)
            titleRef.current.value = ""
            gradeRef.current.value = 0
            e.target.reset();
        }
        return movies;
    }

    return(
        <Container className="container">
            <Form id="form" onSubmit={addMovie}>
                <Form.Group className="mb-3">
                    <Form.Label>Titel:</Form.Label>
                    <Form.Control
                        className="titleText"
                        placeholder="Add a new movie here..."
                        ref={titleRef}
                        />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Betyg:</Form.Label>
                    <Form.Select ref={gradeRef}>
                        <option value={0}>Välj ett betyg här...</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="success" type="submit">Spara film</Button>
            </Form>

        </Container>
    )
}

///onChange={e => setMovies({grade: e.target.value})}