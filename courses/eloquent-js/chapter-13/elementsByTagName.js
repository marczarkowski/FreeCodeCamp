<!doctype html>
<script src="code/mountains.js"></script>
<script src="code/chapter/13_dom.js"></script>

<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
    const result = [];
    function searchDomTree(node) {
      Array.from(node.childNodes).forEach((childNode) => {
        if (childNode.tagName && childNode.tagName.toLowerCase() === tagName) {
          result.push(node);
      		} 
     
        if (childNode.hasChildNodes()) {
        	searchDomTree(childNode);
        }
    });
    }
    
    
    searchDomTree(node);
    
    return result;
  }

  console.log(byTagName(document.body, "h1").length);
  // › 1
  console.log(byTagName(document.body, "span").length);
  // › 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // › 2
</script>