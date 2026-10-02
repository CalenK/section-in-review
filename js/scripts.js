onload = function() {
  let body = document.body;
  function getRandomInt() {
    const min = 0;
    const max = 255;
    return Math.floor(Math.random() * max + 1);
  };
  body.onmouseover = function() {
    const red = getRandomInt();
    const green = getRandomInt();
    const blue = getRandomInt();
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  };
};
