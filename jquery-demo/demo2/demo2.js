document.addEventListener("DOMContentLoaded", function () {
  var _button = document.querySelector(".topbtn");
  var _body = document.querySelector("body");
  _button.onclick = function () {
    _body.classList.toggle("active");
  }
}, false)