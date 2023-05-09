import { useState } from 'react';
import './App.css';
import MovieAddForm from './MovieAddForm';
import Movie from './Movie';


function App() {

  return (
    <div className="container">
        <h1 className="header">Min Filmlista</h1>
        <MovieAddForm />
    </div>
  );
}

export default App;
