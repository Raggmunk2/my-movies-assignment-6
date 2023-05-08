import { useState } from 'react';
import './App.css';
import MovieAddForm from './MovieAddForm';
import Movies from './Movies';


function App() {
  const [movie, setMovie] = useState('');
  const callbackFromMovieForm = (movieData) => {
    setMovie(movieData);
    console.log(movieData);
    console.log(movie);
  }
  return (
    <div className="container">
        <h1 className="header">Min Filmlista</h1>
        <h3>Lägg till en film</h3>
        <MovieAddForm callback={callbackFromMovieForm}/>
        <Movies/>
    </div>
  );
}

export default App;
