//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('char');

  // async function load() {
  //   //console.log(search); //eslint-disable-line
  //   const data = await getPokemon(search);

    
  //   //console.log(data, 2); //eslint-disable-line
  //   return data;
  // }

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemon(search);
  
      if (data) {
        setPokemon(data);
      }
    };
  
    fetchPokemon();
  }, [search]);

  // function handleSearch(e) {
  //   e.preventDefault();

  
  // }


  //console.log(pokemon); //eslint-disable-line
  return (
    <div className="App">
      <form >
        <input value={search} onChange={e => setSearch(e.target.value)}/>
      </form>
      <header className="App-header">
        {pokemon.map((p, i) => <div key={i}>
          <h2>{p.pokemon}</h2>
          <p>weight: {p.weight}</p>
        </div>)}
      </header>
    </div>
  );
}

export default App;
