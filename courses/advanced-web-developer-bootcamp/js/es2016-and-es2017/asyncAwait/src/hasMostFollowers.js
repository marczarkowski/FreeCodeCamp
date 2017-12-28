const axios = require('axios');

const url = 'https://api.github.com/users/';

async function hasMostFollowers(...users) {
  const hasMost = { followers: 0 };
  const calls = users.map(user => (axios.get(`${url}${user}`)));
  const result = await axios.all(calls)
    .then(axios.spread((...res) => {
      res.forEach((user) => {
        const { data } = user;
        const { name, followers } = data;

        if (hasMost.followers < followers) {
          hasMost.name = name;
          hasMost.followers = followers;
        }
      });

      return `${hasMost.name} has the most followers with ${hasMost.followers}`;
    }))
    .catch(err => console.log(err));

  console.log(result);
}

hasMostFollowers('tigarcia', 'colt', 'elie');
