//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('test');

  async function load() {
    const data = getPokemon(search);

    setPokemon(data);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, []); // eslint-disable-next-line





  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

  
    </div>
  );
}

export default App;
