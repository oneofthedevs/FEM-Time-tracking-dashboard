let jsonData;
const spans = ["daily", "weekly", "monthly"];
// Cards
const workCard = document.querySelector(".card-work");
const playCard = document.querySelector(".card-play");
const studyCard = document.querySelector(".card-study");
const exCard = document.querySelector(".card-ex");
const socialCard = document.querySelector(".card-social");
const scCard = document.querySelector(".card-sc");

// Buttons
const dailyBtn = document.querySelector("#daily-btn");
const weeklyBtn = document.querySelector("#weekly-btn");
const monthlyBtn = document.querySelector("#monthly-btn");

// Methods
async function loadJSON() {
  let json = await fetch("./data.json");
  jsonData = await json.json();
}

loadJSON().then(() => {
  setData();
});

function setData(span = 0) {
  let s = spans[span];
  // Style change
  changeLinkColor(s);
  // Work Card
  workCard.children[0].children[1].children[0].innerHTML = `${jsonData[0].timeframes[s].current}hrs`;
  workCard.children[0].children[1].children[1].children[0].innerHTML = `${jsonData[0].timeframes[s].previous}hrs`;

  // Play Card
  playCard.children[0].children[1].children[0].innerHTML = `${jsonData[1].timeframes[s].current}hrs`;
  playCard.children[0].children[1].children[1].children[0].innerHTML = `${jsonData[1].timeframes[s].previous}hrs`;

  // Study Card
  studyCard.children[0].children[1].children[0].innerHTML = `${jsonData[2].timeframes[s].current}hrs`;
  studyCard.children[0].children[1].children[1].children[0].innerHTML = `${jsonData[2].timeframes[s].previous}hrs`;

  // Exercise Card
  exCard.children[0].children[1].children[0].innerHTML = `${jsonData[3].timeframes[s].current}hrs`;
  exCard.children[0].children[1].children[1].children[0].innerHTML = `${jsonData[3].timeframes[s].previous}hrs`;

  // Social Card
  socialCard.children[0].children[1].children[0].innerHTML = `${jsonData[4].timeframes[s].current}hrs`;
  socialCard.children[0].children[1].children[1].children[0].innerHTML = `${jsonData[4].timeframes[s].previous}hrs`;

  // Self care Card
  scCard.children[0].children[1].children[0].innerHTML = `${jsonData[5].timeframes[s].current}hrs`;
  scCard.children[0].children[1].children[1].children[0].innerHTML = `${jsonData[5].timeframes[s].previous}hrs`;
}

dailyBtn.addEventListener("click", () => setData(0));
weeklyBtn.addEventListener("click", () => setData(1));
monthlyBtn.addEventListener("click", () => setData(2));

function changeLinkColor(span = "daily") {
  const selectorText = `#${span}-btn`;
  const selector = document.querySelector(selectorText);
  const allLinks = document.querySelectorAll(".switcher > a");

  allLinks.forEach((x) => x.classList.remove("selected-link"));

  selector.classList.add("selected-link");
}
