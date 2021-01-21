/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const allCards = ["&spades;", "&clubs;", "&diams;", "&hearts;"];
const cardHeight = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const topIcon = document.querySelector("#topIcon");
const bottomIcon = document.querySelector("#bottomIcon");
const numberCard = document.querySelector("#numberCard");
window.onload = function() {
  let myRand = randomSuit();
  changeIcons(topIcon, myRand);
  changeIcons(bottomIcon, myRand);
  changeCardHeight(numberCard);
};
function randomSuit() {
  return Math.floor(Math.random() * allCards.length);
}

function changeIcons(iconID, myRand) {
  iconID.innerHTML = allCards[myRand];
  if (myRand == 0) iconID.classList.add("spade");
  if (myRand == 1) iconID.classList.add("club");
  if (myRand == 2) iconID.classList.add("diamond");
  if (myRand == 3) iconID.classList.add("heart");
}

function changeCardHeight(card) {
  let randomCardHeight = Math.floor(Math.random() * cardHeight.length);
  card.innerHTML = cardHeight[randomCardHeight];
}
