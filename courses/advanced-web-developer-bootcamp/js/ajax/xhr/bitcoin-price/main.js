"use strict";

window.addEventListener("load", () => {
  const btn = document.querySelector('#refresh-btn');
  const price = document.querySelector('.price');
  const getBtcPrice = get('https://api.coindesk.com/v1/bpi/currentprice/PLN');

  btn.addEventListener('click', getBtcPrice);

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
          const btcInPln = response.bpi.PLN || response.bpi.USD;
          price.textContent = setPrice.call(btcInPln);
        } else {
          throw(new Error(this.status));
        }
      }

      function handleError(e) {
        console.log(e.message);
        price.textContent = 'Unknown. Try again.'
      }

      function setPrice()  {
        return `${this.rate} ${this.code}`;
      }
    };
  }
});
