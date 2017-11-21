const url = 'https://randomuser.me/api/';
const btn = document.querySelector('#btn');

btn.addEventListener('click', getUser);

function getUser() {
  fetch(url)
    .then(handleErrors)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  function handleErrors(res) {
    if (res.status === 200) {
      return res.json();
    } else {
      return response.json().then(throwError);
    }

    function throwError(data) {
      let error = new Error(res.status)
      error.response = data;
      error.status = response.status;
      throw Error;
    }
  }
}
