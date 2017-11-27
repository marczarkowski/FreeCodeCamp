document.addEventListener("mousemove", (event) => {
  function generateTrailingElems(count) {
    const trailingElems = [];

    for (let i = 0; i < count; i++) {
      let trailingElem = document.createElement('div');
      trailingElem.className = 'trail';
      trailingElems.push(trailingElem);
    }

    return trailingElems;
  }

  function getRandomlyPositionedElems(arrOfElems) {
    return arrOfElems.map(elem => {
      elem.style.left = (event.pageX + Math.random() * 20) + 'px'; 
      elem.style.top = (event.pageY + Math.random() * 20) + 'px'; 

      return elem;
    });
  }

  const trailingElems = generateTrailingElems(5);
  const renderedTrails = document.querySelectorAll(".trail");
  if (renderedTrails) {
    Array.from(renderedTrails).forEach(trail => {
      document.body.removeChild(trail);
    });
  }
  getRandomlyPositionedElems(trailingElems).forEach(elem => {
    document.body.appendChild(elem);
  });
});
