import { useState } from 'react';
import './App.css';
import MovieAddForm from './MovieAddForm';
import Movie from './Movie';


function App() {
  const [movies, setMovies] = useState([
    {
      title: "j",
      grade: 1,
    }, 
    {
      title: "test",
      grade: 1
    }
  ]);
  const callbackFromMovieForm = (movieData) => {
    movies.push(movieData)
    console.log(movieData); 
    console.log(movies); 
  }
  function deleteMovie(){

  }
  return (
    <div className="container">
        <h1 className="header">Min Filmlista</h1>
        <h3>Lägg till en film</h3>
        <MovieAddForm callback={callbackFromMovieForm}/>
        <h1 className='header'>Inlagda filmer</h1>
           <ul  className="list-group">
               {movies.map(movie => <Movie key={movie.title} item={movies} />)}
          </ul>
    </div>
  );
}

export default App;
