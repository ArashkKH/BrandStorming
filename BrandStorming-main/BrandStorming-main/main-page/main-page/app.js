const sliders = document.querySelectorAll(".slider");
const slide_container = document.getElementsByClassName("slide-container")[0];
let slides_width;
let xPos;
let turn = 0;
slide_width();
//////////Arash Drag Modification///////////
let $Xpos
let XposFunc
document.getElementsByTagName('html')[0].addEventListener('mousemove', (e) => {
  $Xpos = e.clientX
  // console.log($Xpos)
})


////////////////////////////////////////////
function slide_width() {
  slides_width = sliders[0].clientWidth;
  console.log(slides_width);
  console.log(window.innerWidth)
  move()
}
window.addEventListener("resize", () => {
  slide_width();
});

for (i = 0; i < sliders.length; i++) {
  sliders[i].addEventListener('mousedown', (element) => {
    let temp = $Xpos
    let difference
    XposFunc = setInterval(() => {
      difference = $Xpos - temp
      slide_container.style.transform =
        "translateX(" + (-slides_width * turn + difference) + "px)";
    }, 1);
  })

  sliders[i].addEventListener("mouseup", function (event) {
    clearInterval(XposFunc)
    slide_container.classList.add('transition')
    xPos = event.clientX;
    if (xPos < parseInt(slides_width / 2)) {
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
}

function move() {
  slide_container.style.transform =
    "translateX(-" + slides_width * turn + "px)";
    setTimeout(() => {
      slide_container.classList.remove('transition')
    }, 600);

}