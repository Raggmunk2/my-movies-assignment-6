import './App.css';
import MovieAddForm from './MovieAddForm';


function App() {
  return (
    <div className="container">
        <h1 className="header">Min Filmlista</h1>
        <h3>Lägg till en film</h3>
        <MovieAddForm/>
    </div>
  );
}

export default App;
