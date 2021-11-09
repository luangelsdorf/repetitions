export function main() {
  const HOURHAND = document.querySelector("#hour");
  const MINUTEHAND = document.querySelector("#minute");
  const SECONDHAND = document.querySelector("#second");


  function runTheClock() {
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
    let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
    let secPosition = sec * 360 / 60;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

  }

  var interval = setInterval(runTheClock, 1000);
}

export function getRandomPercent() {
  return `${Math.floor(Math.random() * (100 - 1 + 1) + 1)}%`
}

export function getSides() {
  return Math.floor(Math.random() * (6 - 3 + 1) + 3)
}

export function getObjStyle() {
  let arr = [];

  for (let index = 0; index < getSides(); index++) {
    arr.push([getRandomPercent(), getRandomPercent()]);
  }

  return arr.map(el => el.join(' ')).join(', ');
}

export const randomColor = Math.floor(Math.random()*16777215).toString(16);