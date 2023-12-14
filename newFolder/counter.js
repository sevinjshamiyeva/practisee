var count = 0;
var incBtn = document.createElement("button");
incBtn.textContent = "+";
document.body.appendChild(incBtn);
var decBtn = document.createElement("button");
decBtn.textContent = "-";
document.body.appendChild(decBtn);
var counter = document.createElement("div");
counter.textContent = "0";
document.body.appendChild(counter);
// let incBtn = document.querySelector(".incBtn");
// let decBtn = document.querySelector(".decBtn");
// let counter = document.querySelector(".counter")!;
// console.log(incBtn);
incBtn === null || incBtn === void 0 ? void 0 : incBtn.addEventListener("click", function () {
    console.log("sfsxd");
    count++;
    counter.innerHTML = String(count);
});
decBtn === null || decBtn === void 0 ? void 0 : decBtn.addEventListener("click", function () {
    count--;
    counter.innerHTML = String(count);
});
