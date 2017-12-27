const axios = require('axios');

const url = 'https://swapi.co/api/people/';

function starWarsString(num) {
  const destructureRes = ({ data }) => data;
  let str = ``;
  return axios.get(`${url}${num}/`)
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
      console.log(str);
    })
    .catch(err => console.log(err));
}

starWarsString(8);
