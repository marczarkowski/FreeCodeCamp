const url = 'https://randomuser.me/api/';
const btn = document.querySelector('#btn');

btn.addEventListener('click', getUser);

function getUser() {
  fetch(url)
    .then(handleErrors)
    .then(setUserProfile)
    .catch((err) => {
      console.log(err);
    });

  function setUserProfile(data) {
    const userData = data.results[0];

    setFullName.call(userData);
    setAvatar.call(userData);



    function setFullName() {
      const fullName = document.querySelector('#fullname');
      const firstName = getCapitalizedName(this.name.first);
      const lastName = getCapitalizedName(this.name.last);

      fullName.textContent = `${firstName} ${lastName}`;

      function getCapitalizedName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
      }
    }

    function setAvatar() {
      const avatar = document.querySelector('#avatar');

      avatar.src = this.picture.thumbnail;
    }
  }
  function handleErrors(res) {
    return (res.status === 200 ? res.json() : response.json().then(throwError));
  }

  function throwError(data) {
    let error = new Error(res.status)
    error.response = data;
    error.status = response.status;
    throw Error;
  }
}
