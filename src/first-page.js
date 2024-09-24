console.log("are u ready?");

// identify the container div
const contentDiv = document.getElementById('content');

// create the sections 
for (let i=1; i<4; i++) {
    const newSection = document.createElement('section');
    newSection.id = `section-${i}`
    contentDiv.appendChild(newSection);
}

// add the divs inside section-1
const newSection1 = document.getElementById('section-1');

const newSec1H1 = document.createElement('h1');
newSec1H1.textContent = `Our Restaurant`;
newSection1.appendChild(newSec1H1);

const newSec1P = document.createElement('p');
newSec1P.textContent = `Delicious meals made with love!`;
newSection1.appendChild(newSec1P);

// add pizza img inside section-2
const newSection2 = document.getElementById('section-2');


import pizzaImg from "./img/pizza.jpg";
const newImg = document.createElement('img');
newImg.src = pizzaImg;
newImg.alt = `pizza`;
newSection2.appendChild(newImg);

// add the divs inside section-3
const newSection3 = document.getElementById('section-3');

const newSec3H2 = document.createElement('h2');
newSec3H2.textContent = `About Us`;
newSection3.appendChild(newSec3H2);

const newSec3P = document.createElement('p');
newSec3P.textContent = `We are committed to providing the best dining experience with fresh ingredients.`;
newSection3.appendChild(newSec3P);