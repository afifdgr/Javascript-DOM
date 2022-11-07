// const judul = document.getElementById("judul");
// judul.innerHTML = "Diubah dari Javascript";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "hello world";

// const judul = document.querySelector("#judul");
// judul.style.color = "grey";

// const judul = document.getElementsByTagName("h1")[0];

// const a = document.querySelector("section#a a");

// const p2 = document.querySelector(".p2");

//buat elemen baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("paragaraf baru");

// simpan tulisan ke paragraf
pBaru.appendChild(teksPBaru);

//simpan pBaru di akhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("item baru");
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru!");

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);
