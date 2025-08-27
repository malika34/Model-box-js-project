let clickBtn = document.getElementById("btn");
let okBtn = document.getElementById("ok-btn");
let modalBox = document.querySelector(".modal-box");

clickBtn.addEventListener("click", () => {
  modalBox.style.display = "block"; // first make it visible
  setTimeout(() => {
    modalBox.classList.add("show"); // then trigger animation
  }, 10);
});

okBtn.addEventListener("click", () => {
  modalBox.classList.remove("show");
  setTimeout(() => {
    modalBox.style.display = "none"; // hide after animation
  }, 500);
});
