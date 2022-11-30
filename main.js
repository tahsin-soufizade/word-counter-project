const textInput = document.querySelector(".text-input");
const submitButton = document.querySelector(".submit-btn");

// MODAL ELEMENTS
const modalContainer = document.querySelector(".result-modal-wrapper");
const modalWordLength = document.querySelector(".text-length");
const restartButton = document.querySelector(".restart-btn");

submitButton.addEventListener("click", () => {
  if (textInput.value.length > 0) {
    const textLength = textInput.value.trim().split(" ").length;

    modalWordLength.innerText = textLength;

    modalContainer.classList.add("show-modal");
  } else {
    alert("یه متنی رو وارد کن غلام جان 😐");
  }
});

modalContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("result-modal-wrapper")) {
    modalContainer.classList.remove("show-modal");
  }
});

restartButton.addEventListener("click", () => {
  modalContainer.classList.remove("show-modal");
  textInput.value = "";
});
