// Part 1: Toggle Theme
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Part 2: Card Flip with reusable function
const flipCard = document.getElementById("flipCard");
flipCard.addEventListener("click", () => toggleFlip(flipCard));

function toggleFlip(element) {
  element.classList.toggle("flipped");
  return element.classList.contains("flipped"); // returns state
}

// Part 3: Modal Interactions
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => showModal(true));
closeModal.addEventListener("click", () => showModal(false));

function showModal(show) {
  modal.style.display = show ? "block" : "none";
}

// Example of scope demonstration
let globalCounter = 0; // global variable
function incrementCounter(step) {
  let localCounter = step; // local variable
  globalCounter += localCounter;
  console.log("Global counter is now:", globalCounter);
  return globalCounter;
}
