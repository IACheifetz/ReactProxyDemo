//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('char');

  async function load() {
    const data = getPokemon(search);

    setPokemon(data);
  }

  useEffect(() => {
    load();
  }, []); // eslint-disable-line

  async function handleSearch(e) {
    e.preventDefault();

    load();
  }



  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input onChange={e => setSearch(e.target.value)}/>
        <button>Search</button>
      </form>
      <header className="App-header">
        {pokemon.map(({ pokemon, weight }, i) => <div key={pokemon + i}>
          <h2>{pokemon}</h2>
          <p>weight: {weight}</p>
        </div>)}
      </header>
    </div>
  );
}

export default App;
