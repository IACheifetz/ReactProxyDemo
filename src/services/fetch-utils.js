

export async function getPokemon(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions.cat-endpoint?pokemon=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}

export async function getPokemonByName() {
  const rawResponse = await fetch('http://localhost:8888/.netlify/functions/cat-endpoint');
  const data = await rawResponse.json();
  
  return data;
}