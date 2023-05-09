import React, {useState, useRef} from "react";
import Movie from "./Movie";

export default function MovieAddForm(){
    const [movies, setMovies] = useState([
        {
            title: "My first movie",
            grade: '2'
        }
    ]);
    
    function deleteMovie(title){
        setMovies(movies.filter((item) => item.title !== title));
    }
    function sortByAlpha(){        
        const sorted = [...movies].sort((a,b) => a.title.localeCompare(b.title))
        setMovies(sorted);
    }
    function sortByGrade(){
        console.log(movies);
        const sorted = [...movies].sort((a,b) => a.grade.localeCompare(b.grade));
        setMovies(sorted);
    }
    const titleRef = useRef();
    const gradeRef = useRef();

    function addMovie(e){
        e.preventDefault();
        if(titleRef.current.value === "" || gradeRef.current.value === undefined || gradeRef.current.value == 0 || gradeRef.current.value === ""){
            alert("Skriv en titel och ett betyg!");
        }else{
            setMovies([...movies, {
                title: titleRef.current.value, grade: gradeRef.current.value
            }]);
            titleRef.current.value = ""
            gradeRef.current.value = 0
            e.target.reset();
        }
    }

    return(
        <div className="container">

          <h3>Lägg till en film</h3>
            <form id="form" onSubmit={addMovie}>
                <fieldset>
                    <label >Titel:</label>
                    <input className="form-control" placeholder="Lägg till en titel..." ref={titleRef}/>
                    <label >Betyg:</label>
                    <select type="text" className="form-control" ref={gradeRef}>
                        <option value={'0'}>Välj ett betyg här...</option>
                        <option value={'1'}>1</option>
                        <option value={'2'}>2</option>
                        <option value={'3'}>3</option>
                        <option value={'4'}>4</option>
                        <option value={'5'}>5</option>
                    </select>
                    <button type="submit" className="btn btn-success mt-3 mb-3">Spara film</button>
                </fieldset>
            </form>
            <h2 className='header'>Inlagda filmer</h2>
             <ul  className="list-group">
                 {movies.map((movie, i) => 
                 <Movie key={movies[i].title} item={movie} deleteMovie={deleteMovie} />)}
            </ul>
            
            <button type="button" className="btn btn-primary mt-3 mr-3" onClick={sortByAlpha}>Alfabetisk ordning</button>
            <button type="button" className="btn btn-primary mt-3" onClick={sortByGrade}>Betygsordning</button>

        </div>
    )
}

