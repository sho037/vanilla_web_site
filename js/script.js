// Load components.js
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    eval(xhr.responseText);
  }
};
xhr.open("GET", "js/components.js", true);
xhr.send();