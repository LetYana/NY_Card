// const Parallax = require("parallax-js");

// $(document).ready(function () {
//   $(".parallax_list>li").addClass("layer");
//   $(".parallax_list").parallax();

//   $(".wrapper").addClass("active");
// });

function openBoxFunction1(event) {
  event.preventDefault();
  const image = document.querySelector("#present_1");
  image.setAttribute("src", "img/present-1-openend.svg");
}

let giftBox1 = document.querySelector(".parallax_gift_1");
giftBox1.addEventListener("click", openBoxFunction1);
////
function openBoxFunction2(event) {
  event.preventDefault();
  const image = document.querySelector("#present_2");
  image.setAttribute("src", "img/present-2-opened.svg");
}

let giftBox2 = document.querySelector(".parallax_gift_2");
giftBox2.addEventListener("click", openBoxFunction2);
////
function openBoxFunction3(event) {
  event.preventDefault();
  const image = document.querySelector("#present_3");
  image.setAttribute("src", "img/present-3-opened.svg");
}

let giftBox3 = document.querySelector(".parallax_gift_3");
giftBox3.addEventListener("click", openBoxFunction3);
///
function openBoxFunction4(event) {
  event.preventDefault();
  const image = document.querySelector("#present_4");
  image.setAttribute("src", "img/present-4-opened.svg");
}

let giftBox4 = document.querySelector(".parallax_gift_4");
giftBox4.addEventListener("click", openBoxFunction4);
////
function openBoxFunction5(event) {
  event.preventDefault();
  const image = document.querySelector("#present_5");
  image.setAttribute("src", "img/present-5-opened.svg");
}

let giftBox5 = document.querySelector(".parallax_gift_5");
giftBox5.addEventListener("click", openBoxFunction5);
