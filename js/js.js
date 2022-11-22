// const Parallax = require("parallax-js");

// $(document).ready(function () {
//   $(".parallax_list>li").addClass("layer");
//   $(".parallax_list").parallax();

//   $(".wrapper").addClass("active");
// });

function openBoxFunction(event) {
  event.preventDefault();
  const image = document.querySelector("#present_1");
  image.setAttribute("src", "img/present-2.png");
  window.open("https://developer.mozilla.org", "_blank");
}

let giftBox = document.querySelector(".parallax_gift_1");
giftBox.addEventListener("click", openBoxFunction);
