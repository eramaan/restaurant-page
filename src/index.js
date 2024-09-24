console.log("I am alive!");
import "./styles.css";
import "./first-page.js";


const contentDiv = document.getElementById('content');

// Import content for the first load of the page
const loadFirstPageContent = async () => {
    const { repopulateContentFirstPage } = await import('./first-page.js');
    repopulateContentFirstPage(contentDiv);
};

loadFirstPageContent();

const btnHome = document.querySelector('#home');
btnHome.onclick = async () => { 
    contentDiv.innerHTML = "";
    const { repopulateContentFirstPage } = await import('./first-page.js');
    repopulateContentFirstPage(contentDiv);
}

const btnMenu = document.querySelector('#menu');
btnMenu.onclick = async () => { 
    contentDiv.innerHTML = "";
    const { repopulateContentMenu } = await import('./menu.js');
    repopulateContentMenu(contentDiv);
}

const btnContact = document.querySelector('#contact');
btnContact.onclick = async () => { 
    contentDiv.innerHTML = "";
    const { repopulateContentContact } = await import('./contact.js');
    repopulateContentContact(contentDiv);
}