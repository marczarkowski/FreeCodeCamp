"use strict";

window.addEventListener("load", () => {
  const btn = document.querySelector('#btn');
  const photo = document.querySelector('#photo');
  const status = document.querySelector('#status');
  const getRandomDog = get('https://dog.ceo/api/breeds/image/random');

  btn.addEventListener('click', getRandomDog);

  function get(url) {
    return function () {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', url, true);
      xhr.send();

      xhr.onload = handleResponse;
      xhr.onerror = handleError;

      function handleResponse() {
        const response = JSON.parse(this.response);
        const hasRequestSuccedeed = this.status >= 200 && this.status < 300;

        if (hasRequestSuccedeed) {
          photo.src = response.message;
          status.textContent = setResponseStatus(hasRequestSuccedeed)
        } else {
          throw(new Error(this.status));
        }
      }

      function handleError(e) {
        console.log(e.message);
        setResponseStatus(false);
      }

      function setResponseStatus(hasRequestSuccedeed)  {
        return hasRequestSuccedeed ? 'New dog for you!' : 'Try again :(';
      }
    };
  }
});
