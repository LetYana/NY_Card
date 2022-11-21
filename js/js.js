function openBoxFunction(event) {
  event.preventDefault();
  const image = document.querySelector("#present_1");
  image.setAttribute("src", "img/present-2.png");
  window.open("https://developer.mozilla.org", "_blank");
}

let giftBox = document.querySelector(".parallax_gift_1");
giftBox.addEventListener("click", openBoxFunction);

const test = document.getElementById("test");
test.addEventListener(
  "mouseover",
  (event) => {
    event.target.classList.add("crazy_animation_tree");

    setTimeout(() => {
      event.target.classList.add("");
    }, 500);
  },
  false
);
