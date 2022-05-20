
import './App.css';
import PokemonItem from './pokemonItem';
// import LoadingSpinner from './LoadingSpinner';
// import { useState } from 'react';

function App() {
  // const [isLoading] = useState(true);
  


  return (
    <div className="App">
      {/* {isLoading === true ?
        <LoadingSpinner/> : */}
      <PokemonItem />
    </div>
  );
}

export default App;
