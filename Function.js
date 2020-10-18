// Have one function to remove both buttons
function removeButtons() {
  const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");

  yesButton.remove();
  noButton.remove();
}

// This function sets the text of the result header
function setText(text) {
  document.getElementById("result").innerHTML = text;
}

// Click functions

function clickYes() {
  removeButtons();
  setText("Indeed!");
}

function clickNo() {
  setText("Wrooong");
}
