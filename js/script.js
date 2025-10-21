let light = document.querySelector(".light");
let dark = document.querySelector(".dark");

light.addEventListener("click", () => {
    document.body.style.background = "#fff"
});
dark.addEventListener("click", () => {
    document.body.style.background = "#212121"
});

const red = document.querySelector(".red");
const green = document.querySelector(".green");
const bangladesh = document.querySelector(".bangladesh");
const redBtn = document.querySelector(".redBtn");
const greenBtn = document.querySelector(".greenBtn");
const bangladeshBtn = document.querySelector(".bangladeshBtn");
const resetBtn = document.querySelector(".resetBtn");

redBtn.addEventListener("click", () => {
  red.style.background = "#DA291C";
});
greenBtn.addEventListener("click", () => {
  green.style.background = "#006747";
});
bangladeshBtn.addEventListener("click", () => {
  green.style.background = "#006747";
  red.style.background = "#DA291C";
});
resetBtn.addEventListener("click", () => {
  green.style.background = "#eeeeee";
  red.style.background = "#d3d3d3";
});

const flag = document.querySelector(".flag");
const bangladeshFlag = document.querySelector(".bangladeshFlag");
const afghanistanFlag = document.querySelector(".afghanistanFlag");
const palestineFlag = document.querySelector(".palestineFlag");
const bhutan = document.querySelector(".bhutan");
const lebanon = document.querySelector(".lebanon");

bangladeshFlag.addEventListener("click", () => {
  flag.innerHTML =
    '<img src="images/bangladesh.png" alt="Bangladesh Flag" width="500" height="300">';
});
afghanistanFlag.addEventListener("click", () => {
  flag.innerHTML =
    '<img src="./images/afghanistan.png" alt="Afghanistan Flag" width="500" height="300">';
});
palestineFlag.addEventListener("click", () => {
  flag.innerHTML =
    '<img src="./images/palestine.png" alt="Palestine Flag" width="500" height="300">';
});
bhutan.addEventListener("click", () => {
  flag.innerHTML =
    '<img src="./images/bhutan.png" alt="Bhutan Flag" width="500" height="300">';
});
lebanon.addEventListener("click", () => {
  flag.innerHTML =
    '<img src="./images/lebanon.png" alt="Lebanon Flag" width="500" height="300">';
});
