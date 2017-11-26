var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

window.addEventListener("load", () => {
  const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
  const xhrBtn = document.querySelector('#xhr');
  const fetchBtn = document.querySelector('#fetch');
  const jqueryBtn = document.querySelector('#jquery');
  const axiosBtn = document.querySelector('#axios');
  const quote = document.querySelector('#quote');
  const xhrHandler = getViaXhr(url);
  const fetchHandler = getViaFetch(url);

  xhrBtn.addEventListener('click', xhrHandler);
  fetchBtn.addEventListener('click', fetchHandler);

  function getViaXhr(url) {
    return function () {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.send();

      xhr.onload = function () {
        if (this.status === 200) {
          quote.textContent = removeBrackets(this.responseText);
        } else {
          throw Error(this.status);
        }
      };

      xhr.onerror = function () {
        throw Error('Network request failed');
      };

      function removeBrackets(string) {
        return string.slice(1, -1);
      }
    }
  }

  function getViaFetch(url) {
    return function() {
      fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateQuote)
        .catch((err) => console.log(err));

      function parseJSON(res) {
        return res.json().then((data) => data[0]);
      }

      function handleErrors(res) {
        return (res.status === 200 ? res : res.json().then(throwError));

        function throwError(data) {
          let error = new Error(res.status);
          error.response = data;
          error.status = response.status;
          throw Error;
        }
      }
    }
  }

  function updateQuote(data) {
    quote.textContent = data
  }
});
