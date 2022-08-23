// document
//   .getElementsByTagName("nav")[0]
//   .addEventListener("mousemove", (event) => {
//     let _m = document.getElementById("mouse");
//     if (_m.getAttribute("class") == "mouse2") {
//       _m.removeAttribute("class");
//     }
//     let x = event.clientX;
//     let y = event.clientY;
//     document.getElementById("mouse").classList.add("mouse1");
//     document.getElementById("mouse").style.top = y + "px";
//     document.getElementById("mouse").style.left = x + "px";
//   });
// document.getElementById("gallery").addEventListener("mousemove", (event) => {
//   let x = event.clientX;
//   let y = event.clientY;
//   let _m = document.getElementById("mouse");
//   if (_m.getAttribute("class") == "mouse1") {
//     _m.removeAttribute("class");
//   }
//   document.getElementById("mouse").classList.add("mouse2");
//   document.getElementById("mouse").style.top = y + "px";
//   document.getElementById("mouse").style.left = x + "px";
//   document.getElementById("bg-two").style.clipPath =
//     "polygon(0 0 , " + (x + 50) + "px 0 , " + (x - 50) + "px 100% , 0 100%)";
// });
// window.addEventListener("mousedown", () => {
//   document.getElementById("mouse").style.transform =
//     "translate(-50%, -50%)scale(1.5)";
//   document.getElementById("mouse").style.background = "#e6bbbbd2";
// });
// window.addEventListener("mouseup", () => {
//   document.getElementById("mouse").style.transform =
//     "translate(-50%, -50%)scale(1)";
//   document.getElementById("mouse").style.background = "#42adadaf";
// });
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
});


for (i = 0; i < sliders.length; i++) {
  sliders[i].addEventListener("mousedown", function (event) {
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
  });
  sliders[i].addEventListener("mouseup", function (event) {});
}


function move() {
  slide_container.style.transform =
    "translateX(-" + slides_width * turn + "px)";
}