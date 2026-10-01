onload = function() {
  let body = document.body;
  body.onmouseover = function getRandomInt(min, max) {
    body.style.backgroundColor = Math.floor(Math.random() * (max - min + 1) + min);
    return body;
  };
};