// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, nesciunt?",
    person: "dadadad",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur totam ea eos quidem sunt veniam pariatur nons.",
    person: "daoipdjapioj",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur  explicabo, aliquam doloremque accusamus in deleniti quas nemo delectus.",
    person: "hggj",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur totam ea eos quidem sunt agni explicabo, alo delectus.",
    person: "tr5634ioj",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet cos magni explicabo, aliquam doloremque accusamus in deleniti quas nemo delectus.",
    person: "rtrrtajjfgdt",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
