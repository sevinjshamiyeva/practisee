let count: number = 0;
const incBtn: HTMLButtonElement = document.createElement("button");
incBtn.textContent = "+";
document.body.appendChild(incBtn);

const decBtn: HTMLButtonElement = document.createElement("button");
decBtn.textContent = "-";
document.body.appendChild(decBtn);

const counter: HTMLDivElement = document.createElement("div");
counter.textContent = "0";
document.body.appendChild(counter);

// let incBtn = document.querySelector(".incBtn");
// let decBtn = document.querySelector(".decBtn");
// let counter = document.querySelector(".counter")!;
// console.log(incBtn);

incBtn?.addEventListener("click", function () {
  console.log("sfsxd");
  count++;
  counter.innerHTML = String(count);
});
decBtn?.addEventListener("click", function () {
  count--;
  counter.innerHTML = String(count);
});
