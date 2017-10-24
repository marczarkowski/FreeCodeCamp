function asTabs(node) {
  var tabs = Array.from(node.childNodes);
  tabs.forEach((tab, i) => {
    if (i % 2 !== 0) {
      var btn = document.createElement('button');
      btn.textContent = tab.dataset.tabname;
      node.insertBefore(btn, tabs[0]);
    }
  });

  var btns = Array.from(document.getElementsByTagName("button"));

  btns.forEach(btn => {
    btn.addEventListener("click", event => {

    });
  });
}
