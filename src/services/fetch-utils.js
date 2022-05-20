

export async function getPokemon(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/pokeyman?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();
  // if (!data.results) {
  //   console.log(data); //eslint-disable-line
  //   return [{ pokemon:'ben', weight: 600 }];
  // } 
  console.log(data, 4) //eslint-disable-line
  return data.data.results;
  
}

// export async function getPokemonByName() {
//   const rawResponse = await fetch('http://localhost:8888/.netlify/functions/pokeyman');
//   const data = await rawResponse.json();
  
//   return data;
// }