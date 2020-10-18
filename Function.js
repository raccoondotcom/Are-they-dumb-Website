// Have one function to remove both buttons
// Remove this if you don't want buttons to be remove when you press yes
function removeButtons() {
  const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");

  yesButton.remove();
  if (noButton) {
    noButton.remove();
  }
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

  //Remove the two lines after this to prevent no from getting removed when pressed
  const noButton = document.getElementById("no");
  noButton.remove();
}
