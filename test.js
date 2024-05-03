function easeInOutExpo(x) {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

let number = 0;

//run algorithm
let interval = setInterval(() => {
  number += 0.01;
  if (number >= 1) {
    clearInterval(interval);
  }
  console.log(easeInOutExpo(number));
}, 10);
