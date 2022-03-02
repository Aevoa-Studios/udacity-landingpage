// Global variables
const header = document.querySelector('.page__header');
const sections = document.querySelectorAll('[data-nav]');
const navUl = document.querySelector('#navbar__list');
let prevScrollpos = window.pageYOffset;

// Function for building the nav
function createMenu() {

    sections.forEach((section, index) => {
        let listItem = document.createElement('li');
        listItem.classList.add('list__item');
        navUl.appendChild(listItem);
        let link = document.createElement('a');
        listItem.appendChild(link);
        let linkTitle = section.getAttribute('data-nav');
        link.textContent = linkTitle;
        let linkTarget = section.getAttribute('id');

        link.setAttribute("href", `#${linkTarget}`);
        link.setAttribute("data-nav", `${linkTarget}`);
        link.classList.add('menu__link');

    });
}

// Function handling classes
function addActiveClass() {
    
    sections.forEach(function (section) {
        let activeLink = navUl.querySelector(`[data-nav=${section.id}]`);
        if(section.getBoundingClientRect().top >= -350 && section.getBoundingClientRect().top <= 150) {
            section.classList.add('active');
            activeLink.classList.add('active-link');
        } else {
            section.classList.remove('active');
            activeLink.classList.remove('active-link');
            console.log("active class removed!");
        }
    });

}

// Function for smooth scrolling
 function smoothScroll (e) {
    e.preventDefault();
    if (e.target.dataset.nav) {
        document.getElementById(`${e.target.dataset.nav}`).scrollIntoView({behavior: "smooth", duration: 2000})
    }
 }

// Event listeners
document.addEventListener('DOMContentLoaded', createMenu);
window.addEventListener('scroll', addActiveClass);
navUl.addEventListener('click', smoothScroll);
