const tombolUbahWarna = document.getElementById("tombolUbahWarna");
tombolUbahWarna.onclick = function () {
  document.body.classList.toggle("merah");
};

const tombolAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tombolAcakWarna.appendChild(teksTombol);
tombolAcakWarna.setAttribute("type", "button");
tombolUbahWarna.after(tombolAcakWarna);

tombolAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + " " + g + " " + b + ")";
});

const sliderMerah = document.querySelector("input[name=sliderMerah]");
const sliderHijau = document.querySelector("input[name=sliderHijau]");
const sliderBiru = document.querySelector("input[name=sliderBiru]");

sliderMerah.addEventListener("input", function () {
  const r = sliderMerah.value;
  const b = sliderBiru.value;
  const g = sliderHijau.value;

  document.body.style.backgroundColor = "rgb(" + r + " " + g + " " + b + ")";
});

sliderHijau.addEventListener("input", function () {
  const r = sliderMerah.value;
  const b = sliderBiru.value;
  const g = sliderHijau.value;
  document.body.style.backgroundColor = "rgb(" + r + " " + g + " " + b + ")";
});

sliderBiru.addEventListener("input", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + " " + g + " " + b + ")";
});

document.body.addEventListener("mousemove", function (e) {
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerWidth) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});
