console.log("call me maybe");
import contactImg from "./img/contact.jpg";


export function repopulateContentContact(contentDiv) {

    // create the sections 
    for (let i=1; i<4; i++) {
        const newSection = document.createElement('section');
        newSection.id = `section-${i}`
        contentDiv.appendChild(newSection);
    }

    // add the divs inside section-1
    const newSection1 = document.getElementById('section-1');

    const newSec1H1 = document.createElement('h1');
    newSec1H1.textContent = `Contact us`;
    newSec1H1.className = `contact`;
    newSection1.appendChild(newSec1H1);

    const newSec1P = document.createElement('p');
    newSec1P.textContent = `Drop a line!`;
    newSec1P.className = `contact`;
    newSection1.appendChild(newSec1P);

    // add contact img inside section-2
    const newSection2 = document.getElementById('section-2');

    const newImg = document.createElement('img');
    newImg.src = contactImg;
    newImg.alt = `contact`;
    newSection2.appendChild(newImg);

    // add the divs inside section-3
    const newSection3 = document.getElementById('section-3');

    const newSec3H2 = document.createElement('h2');
    newSec3H2.textContent = `Contact info`;
    newSec3H2.className = `contact`;
    newSection3.appendChild(newSec3H2);

    const newSec3P1 = document.createElement('p');
    newSec3P1.textContent = `Email: info@ourrestaurant.com/n Phone: (123) 456-7890`;
    newSec3P1.className = `contact`;
    newSection3.appendChild(newSec3P1);

    const newSec3P2 = document.createElement('p');
    newSec3P2.textContent = `© 2024 Our Restaurant`;
    newSec3P2.className = `contact`;
    newSection3.appendChild(newSec3P2);

}
