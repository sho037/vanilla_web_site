// head
var head = document.getElementById("head");
var headresponse = new XMLHttpRequest();
headresponse.onreadystatechange = function () {
  if (headresponse.readyState === 4 && headresponse.status === 200) {
    head.innerHTML = headresponse.responseText;
  }
};
headresponse.open("GET", "components/head.html", true);
headresponse.send();

// header
var header = document.getElementById("header");
var headerresponse = new XMLHttpRequest();
headerresponse.onreadystatechange = function () {
  if (headerresponse.readyState === 4 && headerresponse.status === 200) {
    header.innerHTML = headerresponse.responseText;
  }
};
headerresponse.open("GET", "components/header.html", true);
headerresponse.send();

// footer
var footer = document.getElementById("footer");
var footerresponse = new XMLHttpRequest();
footerresponse.onreadystatechange = function () {
  if (footerresponse.readyState === 4 && footerresponse.status === 200) {
    footer.innerHTML = footerresponse.responseText;
  }
}
footerresponse.open("GET", "components/footer.html", true);
footerresponse.send();