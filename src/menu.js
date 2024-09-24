console.log("voilà!");
import menuImg from "./img/menu.jpg";

export function repopulateContentMenu(contentDiv) {

    // create the sections 
    for (let i=1; i<4; i++) {
        const newSection = document.createElement('section');
        newSection.id = `section-${i}`
        contentDiv.appendChild(newSection);
    }

    // add the divs inside section-1
    const newSection1 = document.getElementById('section-1');

    const newSec1H1 = document.createElement('h1');
    newSec1H1.textContent = `The menu`;
    newSec1H1.className = `menu`;
    newSection1.appendChild(newSec1H1);

    const newSec1P = document.createElement('p');
    newSec1P.textContent = `Delicious meals for delicious people!`;
    newSec1P.className = `menu`;
    newSection1.appendChild(newSec1P);

    // add menu img inside section-2
    const newSection2 = document.getElementById('section-2');

    const newImg = document.createElement('img');
    newImg.src = menuImg;
    newImg.alt = `menu`;
    newSection2.appendChild(newImg);

    // add the ul / li inside section-3
    const newSection3 = document.getElementById('section-3');

    const newSec3H2 = document.createElement('h2');
    newSec3H2.textContent = `Check the list`;
    newSec3H2.className = `menu`;
    newSection3.appendChild(newSec3H2);

    const newSec3Ul = document.createElement('ul');
    newSection3.appendChild(newSec3Ul);

    const newSec3Li1 = document.createElement('li');
    newSec3Li1.textContent = `Pasta - $12`;
    newSec3Li1.className = `menu`;
    newSection3.appendChild(newSec3Li1);

    const newSec3Li2 = document.createElement('li');
    newSec3Li2.textContent = `Pizza - $10`;
    newSec3Li2.className = `menu`;
    newSection3.appendChild(newSec3Li2);

    const newSec3Li3 = document.createElement('li');
    newSec3Li3.textContent = `Salad - $8`;
    newSec3Li3.className = `menu`;
    newSection3.appendChild(newSec3Li3);

}