const url = 'https://random.cat/meow';
const btn = document.querySelector('#btn');

btn.addEventListener('click', getCat);

function getCat() {
  $.get(url)
    .done(updateCatPhoto)
    .fail((err) => {
      console.log(err);
    });

  function updateCatPhoto(cat) {
    const photo = document.querySelector("#photo");

    photo.src = cat.file;
  }
}
