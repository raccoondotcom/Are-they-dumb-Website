function remove() {
  var elem = document.getElementById("no");
  elem.parentNode.removeChild(elem);
  return false;
}
function removeyes() {
  var elem = document.getElementById("yes");
  elem.parentNode.removeChild(elem);
  return false;
}

function removeButtons() {
  const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");

  yesButton.remove();
  noButton.remove();
}
