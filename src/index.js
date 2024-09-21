import "./styles.css";
import initialPageLoad from "./initialPageLoad";
import loadMenu from "./menu";
import loadContact from "./contact";

function setActiveTab(tab) {
  // Remove 'active' class from all buttons
  document.querySelectorAll('button').forEach(button => button.classList.remove('active'));

  //  Add 'active' class to the selected tab
  document.getElementById(`${tab}-tab`).classList.add('active');
}

function setupTabs() {
  const homeTab = document.getElementById('home-tab');
  const menuTab = document.getElementById('menu-tab');
  const contactTab = document.getElementById('contact-tab');

  homeTab.addEventListener('click', () => {
    initialPageLoad();
    setActiveTab('home');
  });

  menuTab.addEventListener('click', () => {
    loadMenu();
    setActiveTab('menu');
  });

  contactTab.addEventListener('click', () => {
    loadContact();
    setActiveTab('contact');
  });
}


initialPageLoad();
setActiveTab('home');
setupTabs();
