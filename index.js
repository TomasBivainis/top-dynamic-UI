const buttonDropdownButton = document.querySelector("#dropdown_button");
const divDropdownMenu = document.querySelector("#dropdown_menu");
const divDropdown = document.querySelector("#dropdown");
const buttonBack = document.querySelector("#back");
const buttonForward = document.querySelector("#forward");
const divPictures = document.querySelector("#pictures");
const divButtons = document.querySelector("#buttons");

let position = 0;
const pictures = divPictures.querySelectorAll(".picture");
const pictureAmount = pictures.length;
let lastTime = Date.now();

buttonDropdownButton.addEventListener("mouseenter", () => {
  divDropdownMenu.hidden = false;
});

divDropdown.addEventListener("mouseleave", () => {
  divDropdownMenu.hidden = true;
});

buttonBack.addEventListener("click", goBack);

buttonForward.addEventListener("click", goForward);

function goForward() {
  let index = position + 1;

  index = index % pictureAmount;

  goToIndex(index);
}

function goBack() {
  let index = position - 1;

  if (index < 0) index += pictureAmount;

  goToIndex(index);
}

function goToIndex(index) {
  position = index;
  displayPicture();
  displayDots();
}

function displayPicture() {
  divPictures.style.transform = `translateX(${-100 * position}px)`;
}

function displayDots() {
  divButtons.innerHTML = "";

  for (let i = 0; i < pictureAmount; i++) {
    const buttonCircle = document.createElement("button");
    buttonCircle.classList.add(`${i}`);
    buttonCircle.classList.add("circle");
    if (position === i) buttonCircle.classList.add("selected");

    buttonCircle.addEventListener("click", (e) => {
      goToIndex(parseInt(e.target.classList[0]));
    });

    divButtons.appendChild(buttonCircle);
  }
}

displayDots();

setInterval(goForward, 5000);
