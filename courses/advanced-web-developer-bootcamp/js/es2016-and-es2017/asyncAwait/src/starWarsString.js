const axios = require('axios');

const url = 'https://swapi.co/api/people/';

async function starWarsString(num) {
  const destructureRes = ({ data }) => data;
  let str = '';
  const result = await axios.get(`${url}${num}/`)
    .then(destructureRes)
    .then(({ name, films }) => {
      str += `${name}`;
      return axios.get(films[0]);
    })
    .then(destructureRes)
    .then(({ title, director, planets }) => {
      str += ` is featured in the ${title}, directed by ${director}`;
      return axios.get(planets[0]);
    })
    .then(destructureRes)
    .then(({ name: planetName }) => {
      str += ` and it takes place on ${planetName}`

      return str;
    })
    .catch(err => console.log(err));

  console.log(result);
}

starWarsString(8);
