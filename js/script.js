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

/*** 
 * `quotes` array 
***/
const quotes = [
  {
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
  }
];

let timedQuote = setInterval(printQuote, 8000);


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuoteObj = quotes[randomNumber];
  return randomQuoteObj;
}

/***
 * `getRandomColor` function
***/
let getRandomColor = () => Math.floor(Math.random() * 256);

/***
 * `printQuote` function
***/
function printQuote() {
  console.log(timedQuote);
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.subject) {
    html += `<span class="year">${randomQuote.subject}</span>`;
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
  document.querySelector('body').style.backgroundColor = `hsl(${getRandomColor()}, 50%, 50%)`;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);