// const p3 = document.querySelector(".p3");

// function ubahWarna() {
//   p2.style.backgroundColor = "aqua";
// }

// const p2 = document.querySelector(".p2");
// p2.onclick = ubahWarna;

// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   const ul = document.querySelector("section#b ul");
//   const liBaru = document.createElement("li");
//   const teksLiBaru = document.createTextNode("Item Baru");
//   liBaru.appendChild(teksLiBaru);
//   ul.appendChild(liBaru);
// });

const p3 = document.querySelector(".p3");
// p3.onclick = function () {
//   p3.style.backgroundColor = "aqua";
// };

// p3.onclick = function () {
//   p3.style.color = "red";
// };

p3.addEventListener("mouseenter", function () {
  p3.style.backgroundColor = "aqua";
});

p3.addEventListener("mouseleave", function () {
  p3.style.backgroundColor = "white";
});
