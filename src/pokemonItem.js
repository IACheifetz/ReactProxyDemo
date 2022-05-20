import { useState } from 'react';
import { getPokemon } from './services/fetch-utils';
import LoadingSpinner from './LoadingSpinner';

export default function PokemonSearch() {const [pogeyman, setPogeyman] = useState([]);
  const [pogeymanQuery, setPogeymanQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handlePokemonSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await getPokemon(pogeymanQuery);
    //console.log(response, 2); //eslint-disable-line
    setPogeyman(response);
    setIsLoading(false);
  }
      
  return (
    <section className='pokemon'>
      <form onSubmit={handlePokemonSubmit}>
            Search for Pokemon
        <input onChange={e => setPogeymanQuery(e.target.value)} />
        <button>Get pokemon</button>
      </form>
      {isLoading === true ? 
        <LoadingSpinner/> : 
        <header className="App-header">
          {pogeyman.map((p, i) => <div key={i}>
            <h2>{p.pokemon}</h2>
            <p>weight: {p.weight}</p>
          </div>)}
        </header>}
      
    </section>
  );

}