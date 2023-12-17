const cardOnClick = (cardNumber, color) => {
  const cardElement = document.getElementById(`${color}${cardNumber}`);

  if (cardElement.classList.contains(`bg-${color}`)) {
    cardElement.classList.remove(`bg-${color}`);
    cardElement.classList.add("bg-secondary");
  } else if (cardElement.classList.contains("bg-secondary")) {
    cardElement.classList.remove("bg-secondary");
    cardElement.classList.add(`bg-${color}`);
  }
};

const createCardsForColors = (containerId, color, numberOfCards) => {
  const cardsContainer = document.getElementById(containerId);

  for (let i = 1; i <= numberOfCards; i++) {
    const card = document.createElement("div");
    card.classList.add("col-sm", `bg-${color}`);
    card.id = `${color}${i}`;
    card.textContent = `${i}`;
    card.style = "text-align: center; cursor: pointer; border:2px solid; height:150px; line-height:150px; font-size: 40px; vertical-align: middle;";

    const mediaQuery = window.matchMedia("(max-width: 575px)");

    if (mediaQuery.matches) {
      card.style.height = "35px";
      card.style.lineHeight = "35px";
      card.style.fontSize = "20px";
    } 

    card.onclick = () => cardOnClick(i, color);
    cardsContainer.appendChild(card);
  }
};

const numberOfRedCards = 8;
const numberOfYellowCards = 8;
const numberOfBlueCards = 8;

const createCards = () => {
  const red = document.getElementById("redCardsContainer");
  const blue = document.getElementById("blueCardsContainer");
  const yellow = document.getElementById("yellowCardsContainer");

  red.innerHTML = "";
  blue.innerHTML = "";
  yellow.innerHTML = "";

  createCardsForColors("redCardsContainer", "danger", numberOfRedCards);
  createCardsForColors("yellowCardsContainer", "warning", numberOfYellowCards);
  createCardsForColors("blueCardsContainer", "primary", numberOfBlueCards);
};

createCards();
