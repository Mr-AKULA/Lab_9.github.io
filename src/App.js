import './App.css';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Кинотеатр "Премьера"</h1>
      </header>
      <main>
        <MovieDetails />
      </main>
      <footer>
        <p>© 2025 Кинотеатр</p>
      </footer>
    </div>
  );
}

export default App;