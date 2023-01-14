/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/**
 * This Web application is designed to provide inspirational quotes at regular intervals automatically and from the click of a button. 
 ***/

/*** 
 * `quotes` array containing well known quotes from insppirational fiqures.
***/
const quotes = [{
                  quote: 'I have learned that success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed.',
                  source: 'Booker T. Washington',
                  subject: 'Philosophy'
                },
                {
                  quote: 'Have a vision of excellence, a dream of success, and work like hell.',
                  source: 'Dr. Samuel DuBois Cook',
                  subject: 'excellence'
                },
                {
                  quote: 'In recognizing the humanity of our fellow beings, we pay ourselves the highest tribute.',
                  source: 'Thurgood Marshall',
                },
                {
                  quote: 'We need to internalize this idea of excellence. Not many folks spend a lot of time trying to be excellent.',
                  source: 'Barack Obama',
                },
                {
                  quote: 'Darkness can not drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
                  source: 'Martin Luther King Jr',
                },
                {
                  quote: 'If there is no struggle, there is no progress.',
                  source: 'Frederick Douglass',
                  subject: 'motivational'
                },
                {
                  quote: 'They refuse to look for new ideas and new outlets, so they fall by the wayside… I\'m going to try to find out the new ideas before the others do.',
                  source: 'Ella Fitzgerald',
                },
                {
                  quote: 'Definitions belong to the definers, not the defined.',
                  source: 'Toni Morrison',
                  citation: 'Book; Beloved',
                  year: 'September 16th 1987'
                },
                {
                  quote: 'Not everything that is faced can be changed; but nothing can be changed until it is faced.',
                  source: 'James Baldwin',
                  citation: 'New York Times',
                  year: '1962'
                },
                {
                  quote: 'You can\'t separate peace from freedom because no one can be at peace unless he has his freedom.',
                  source: 'Malcolm X',
                  citation: 'Oxford Essential Quotations (5 ed), speech in New York',
                  year: '7 January 1965'
                },
];

/***
 * set timing interval to call printQuote function, adding a new quote and background color. 
 ***/
let resetTimer = setInterval(printQuote, 8000);

/***
 * `printQuote` function - aquire random object, build string from object properties/keys. Get random color for background
 * and load to Web page. Additionaly only assign quote objects that are not the same as the previous assigned object. 
***/
let currentQuote;
  let randomQuote;

function printQuote() {
  do {
    randomQuote = getRandomQuote();
  } while(randomQuote.quote === currentQuote);
  currentQuote = randomQuote.quote;

  let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.subject) {
    html += `<span class="subject"> - ${randomQuote.subject}</span>`;
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html ;
  document.querySelector('body').style.backgroundColor = `hsl(${getRandomColor()}, 50%, 50%)`;
}

/***
 * `getRandomQuote` function - return random quote object from quotes array
***/
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  let quoteObj = quotes[randomNum];
  return quoteObj;
};

/***
 * generate and return random color
***/
const getRandomColor = () => Math.floor(Math.random() * 256);

/***
 * Reset timed interval
 ***/
function resetTimedInterval() {
    clearInterval(resetTimer);
    resetTimer = setInterval(printQuote, 8000);
}

/***
 * Click event listener for loading new quote and background color to Web page simultaniously reseting timer.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", resetTimedInterval, false);