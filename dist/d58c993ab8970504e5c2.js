//document.getElementById('main_container').style.height = window.innerHeight + 'px';
var currentPage = 1;
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const homeButton = document.getElementById('home_button');
const menuButton = document.getElementById('menu_button');
const contactButton = document.getElementById('contact_button');
const hero = document.getElementsByClassName('hero');

const switchPage = () => {
  if (currentPage === 1) {
    home.style.display = "initial";
    menu.style.display = "none";
    contact.style.display = "none";
    title.innerHTML = "Tommy's";
    subtitle.innerHTML = "Serving high-end cuisines since 1985";
    homeButton.style.textDecoration = "underline";
    menuButton.style.textDecoration = "none";
    contactButton.style.textDecoration = 'none';
    hero[0].setAttribute('id', 'hero');
  } else if (currentPage === 2) {
    menu.style.display = "initial";
    home.style.display = "none";
    contact.style.display = "none";
    title.innerHTML = "Menu";
    subtitle.innerHTML = "All our fresh ingredients are handpicked from our organic garden.";
    menuButton.style.textDecoration = "underline";
    homeButton.style.textDecoration = "none";
    contactButton.style.textDecoration = 'none';
    hero[0].setAttribute('id', 'darkenedHero'); // hero.style.backgroundImage = "linear-gradient(to top, rgba(0,0,0,0.1), rgba(255,255,255, 0.5)), url('./images/dish.webp')";
  } else if (currentPage === 3) {
    contact.style.display = "initial";
    menu.style.display = "none";
    home.style.display = "none";
    title.innerHTML = "Contact";
    subtitle.innerHTML = "Feel free to reach out to us.";
    contactButton.style.textDecoration = "underline";
    menuButton.style.textDecoration = "none";
    homeButton.style.textDecoration = 'none';
    hero[0].setAttribute('id', 'darkenedHero');
  }
};

const changePage = page => {
  currentPage = page;
  switchPage();
};

switchPage();