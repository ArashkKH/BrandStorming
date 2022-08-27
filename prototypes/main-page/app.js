// Pre Animation
setInterval(() => {
  document.getElementsByClassName("trans")[0].style.transform = "translateY(0)";
}, 100);

// loading
const _span = document.querySelectorAll("#load>span");
setInterval(loading, 0);
function loading() {
  for (i = 0; i < _span.length; i++) {
    _span[i].style.transitionDelay = i * 0.5 + "s";
    // console.log(_span[i].style.transition);
    _span[i].style.opacity = "1";
  }
}
// after-come
setInterval(() => {
  document.getElementsByClassName("after-come")[0].style.transform =
    "translateY(-100%)";
  document.getElementById("preanime").style.transform = "translateY(-100%)";
}, 2000);

// Slider
const sliders = document.querySelectorAll(".slider");
const slide_container = document.getElementsByClassName("slide-container")[0];
let slides_width;
let xPos;
let turn = 0;
slide_width();

function slide_width() {
  slides_width = sliders[0].clientWidth;
  console.log(slides_width);
}
window.addEventListener("resize", () => {
  slide_width();
  move();
});
document.querySelector("a").addEventListener("click", () => {
  turn = 3;
});
for (i = 0; i < sliders.length; i++) {
  sliders[i].addEventListener(
    "mousedown",
    function (event) {
      xPos = event.clientX;
      if (xPos >= parseInt(slides_width / 2)) {
        turn++;
        if (turn < sliders.length) {
          move();
        } else {
          turn = 0;
          move();
        }
      } else {
        turn--;
        if (turn < 0) {
          turn = 0;
        }
        move();
      }
    },
    true
  );
  sliders[i].addEventListener("mouseup", function (event) {});
}

function move() {
  slide_container.style.transform =
    "translateX(-" + slides_width * turn + "px)";
}
