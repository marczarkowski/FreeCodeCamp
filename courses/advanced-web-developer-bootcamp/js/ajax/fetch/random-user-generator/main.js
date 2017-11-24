const url = 'https://randomuser.me/api/';
const btn = document.querySelector('#btn');

btn.addEventListener('click', getUser);

function getUser() {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(setUserProfile)
    .catch((err) => {
      console.log(err);
    });

  function setUserProfile(user) {
    setAvatar.call(user);
    setCapitalizedTextContent('#fullname', user.name.first, user.name.last);
    setTextContent('#username', user.login.username);
    setTextContent('#email', user.email);
    setCapitalizedTextContent('#city', user.location.city);

    function setAvatar() {
      const avatar = document.querySelector('#avatar');

      avatar.src = this.picture.medium;
    }

    function setTextContent(selector, value) {
      const node = document.querySelector(selector);

      node.textContent = value
    }

    function setCapitalizedTextContent(selector, ...value) {
      const node = document.querySelector(selector);

      const splitBySpace = el => el.split(' ');

      const flatten = (a, b) => a.concat(b);

      const joinArrayWithCapitalization = (sum, cur) => `${sum}  ${getCapitalizedStr(cur)}`;

      const getCapitalizedStr = str =>  str.charAt(0).toUpperCase() + str.slice(1);

      node.textContent = value.map(splitBySpace)
        .reduce(flatten)
        .reduce(joinArrayWithCapitalization, '');
    }
  }

  function handleErrors(res) {
    return (res.status === 200 ? res : res.json().then(throwError));

    function throwError(data) {
      let error = new Error(res.status)
      error.response = data;
      error.status = response.status;
      throw Error;
    }
  }

  function parseJSON(res) {
    return res.json().then((data) => data.results[0]);
  }


}
