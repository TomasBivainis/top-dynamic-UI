const buttonDropdownButton = document.querySelector("#dropdown_button");
const divDropdownMenu = document.querySelector("#dropdown_menu");
const divDropdown = document.querySelector("#dropdown");
const buttonBack = document.querySelector("#back");
const buttonForward = document.querySelector("#forward");
const divPictures = document.querySelector("#pictures");

let position = 0;
const pictureAmount = (divPictures.childNodes.length - 1) / 2;

buttonDropdownButton.addEventListener("mouseenter", () => {
  divDropdownMenu.hidden = false;
});

divDropdown.addEventListener("mouseleave", () => {
  divDropdownMenu.hidden = true;
});

buttonBack.addEventListener("click", goBack);

buttonForward.addEventListener("click", goForward);

function goForward() {
  position++;

  position = position % pictureAmount;

  divPictures.style.transform = `translateX(${-100 * position}px)`;
}

function goBack() {
  position--;

  if (position < 0) position += pictureAmount;

  divPictures.style.transform = `translateX(${-100 * position}px)`;
}
