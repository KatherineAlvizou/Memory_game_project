
//Create a list that holds all cards.
const cards = [
  "fa fa-cube",
  "fa fa-cube",
  "fa fa-bolt",
  "fa fa-bolt",
  "fa fa-diamond",
  "fa fa-diamond",
  "fa fa-paper-plane-o",
  "fa fa-paper-plane-o",
  "fa fa-anchor",
  "fa fa-anchor",
  "fa fa-leaf",
  "fa fa-leaf",
  "fa fa-bicycle",
  "fa fa-bicycle",
  "fa fa-bomb",
  "fa fa-bomb"
];

// Declaring my variables
let matchedCards = [];
let openCards = [];
const cardDEck = document.querySelector(".deck");
const restart = document.querySelector(".restart");
let counter = document.querySelector(".moves");
let counting = 0;
let stars = document.querySelectorAll(".fa-star");
let timer = document.querySelector(".timer");
let modal = document.querySelector(".popup-modal");
let button = document.querySelector(".play-again");

/*
* Display the cards on the page
*   - shuffle the list of cards using the "shuffle" method below
*   - loop through each card and create its HTML
*   - add each card's HTML to the page
*/

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex;

  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
}

function initGame() {
  shuffle(cards);
  for (let i = 0; i < cards.length; i++) {
      const card = document.createElement("li");
      card.classList.add("card");
      card.innerHTML = `<i class= "${cards[i]}"></i>`;
      cardDEck.appendChild(card);

      //Listens for click events on cards and displays them
      card.addEventListener("click", function() {
          if (!card.classList.contains("open")) {
              card.classList.add("open", "show");
              openCards.push(card);
          }

          if (openCards.length === 2) {
              setTimeout(function() {
                  compare();
                  moveCounter();
              }, 400);
          }
      });
  }
}

// Compares 2 selected cards
function compare() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("match");
      openCards[1].classList.add("match");
      matchedCards.push(openCards[0], openCards[1]);
      openCards = [];
      gameOver();
  } else {
      openCards[0].classList.remove("open", "show");
      openCards[1].classList.remove("open", "show");
      openCards = [];
  }
}
initGame();

function gameOver() {
  if (matchedCards.length === cards.length) {
      clearInterval(interval);
      modal.style.visibility = "visible";
      let time = timer.innerHTML;
      let starNum = document.querySelector(".stars").innerHTML;

      document.querySelector(".total-moves").innerHTML = counting;
      document.querySelector(".total-time").innerHTML = time;
      document.querySelector(".total-stars").innerHTML = starNum;
  }
}

//When 'Click me' button is clicked game starts again

button.addEventListener("click", function() {
  modal.style.visibility = "hidden";
  cardDEck.innerHTML = "";

  //Resets counting moves, star rating and timer
  counting = 0;
  counter.innerHTML = counting;

  for (let i = 0; i < stars.length; i++) {
      stars[i].style.visibility = "visible";
  }

  second = 0;
  minute = 0;
  hour = 0;

  timer.innerHTML = "0 mins 0 secs";
  clearInterval(interval);
  initGame();
});

//When restart icon is clicked game starts again

restart.addEventListener("click", function() {
  cardDEck.innerHTML = "";

  //Resets counting moves, star rating and timer
  counting = 0;
  counter.innerHTML = counting;

  for (let i = 0; i < stars.length; i++) {
      stars[i].style.visibility = "visible";
  }

  second = 0;
  minute = 0;
  hour = 0;

  timer.innerHTML = "0 mins 0 secs";
  clearInterval(interval);
  initGame();
});

function moveCounter() {
  counting++;
  counter.innerHTML = counting;
  //start timer on first move
  if (counting == 1) {
      second = 0;
      minute = 0;
      hour = 0;
      startTimer();
  }

  //star rating from 1-3 depending on user's performance
  if (counting > 10 && counting < 15) {
      for (let i = 0; i < 3; i++) {
          if (i > 1) {
              stars[i].style.visibility = "collapse";
          }
      }
  } else if (counting > 15) {
      for (let i = 0; i < 3; i++) {
          if (i > 0) {
              stars[i].style.visibility = "collapse";
          }
      }
  }
}
//game timer

let second = 0;
let minute = 0;
let hour = 0;

let interval;

function startTimer() {
  interval = setInterval(function() {
      timer.innerHTML = minute + "mins " + second + "secs";
      second++;
      if (second == 60) {
          minute++;
          second = 0;
      }
      if (minute == 60) {
          hour++;
          minute = 0;
      }
  }, 1000);
}