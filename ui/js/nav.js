function load_home() {
    document.getElementById("content").innerHTML = '<object type="text/html" data="ui/pages/100G.html" ></object>';
}
function load_about() {
  document.getElementById("page").innerHTML = '<object type="text/html" data="ui/pages/about.html" ></object>';
}
function load_100G() {
  fetch('ui/pages/100G.html')
    .then(function (response) {
      return response.text()
    })
    .then(function (html) {
      var cleanHTML = DOMPurify.sanitize(html);
      document.getElementById("page").innerHTML = cleanHTML;
    })
  load_button();
}
function load_button() {
  // Get the element, add a click listener...
  document.getElementById("page").addEventListener("click", function(e) {
      // e.target is the clicked element!
      if(e.target && e.target.matches("a#ping_btn")) { 
      start_ping();
          // item found!  Output the ID!
          console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
      }
  });
}
function load_400G() {
  document.getElementById("page").innerHTML = '<object type="text/html" data="ui/pages/400G.html" ></object>';
}