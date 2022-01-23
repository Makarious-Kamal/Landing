
/*
 * Define Global Variables
*/
const navList = document.getElementById('navbar__list');
const sectionsList = document.querySelectorAll('section');
let toTopButton = document.querySelector('span.scroll-to-top-button');
/*
 * End Global Variables
*/

/*
 * Begin Main Functions
*/

// building the dynamic navlist

function createNavList() {
    let listFragment = document.createDocumentFragment();
    sectionsList.forEach(function (ele) {
        const sectionName = ele.getAttribute('data-nav');
        const sectionLink = ele.getAttribute('id');
        const liItem = document.createElement('li');
        liItem.innerHTML = `<a href="#${sectionLink}" class="menu__link">${sectionName}</a>`;
        listFragment.appendChild(liItem);
    });
    navList.appendChild(listFragment);
};
createNavList();

// checking whether the section is in the top of viewport or not
function viewPortChecking(section) {
    let domRect = section.getBoundingClientRect().top;
    if (domRect <= 5) {
        return true;
    } else {
        return false;
    }
};

// Adding the class 'your-active-class' to the section near the top of viewport
function activeClassToggling() {
    sectionsList.forEach(function (ele) {
        if (viewPortChecking(ele)) {
            sectionsList.forEach(function (ele) {
                // removing the 'your-active-class' from all sections
                ele.classList.remove('your-active-class');
            });
            // then adding the 'your-active-class' to the current viewed section in the viewport
            ele.classList.add('your-active-class');
        }
    });
};

/*
 * End Main Functions
*/

/*
 * Begin Helper Functions
*/

// Hiding the navbar while user is no longer scrolling
function hideNavBar() {
    let navBar = document.querySelector('.page__header');
    navBar.style.display = 'none';
};
setTimeout(hideNavBar, 15000);

// Scroll to top functions

// Showing and Hiding the button
window.onscroll = function () {
    window.scrollY >= 1000 ? toTopButton.classList.add('show') : toTopButton.classList.remove('show');
};

// Scroll to top
function goToTop() {
    window.scrollTo({
        top: 0
    });
};
/*
 * End Helper Functions
*/

/*
 * Begin Events
*/

// Scrolling event to start the activeClassToggling function upon page scrolling
document.addEventListener('scroll', activeClassToggling);
// toTopButton clicking event to scroll to top
toTopButton.addEventListener('click', goToTop);
/*
 * End Events
*/
