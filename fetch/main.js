
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => console.log(users));

fetch('https://pokeapi.co/api/v2/pokemon/greninja')
  .then(response => response.json())
  .then(data => console.log(data));
