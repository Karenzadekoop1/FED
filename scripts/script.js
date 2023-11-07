// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("header nav button");


// dit is de button die veranderd van vorm
function menuButtonKlik() {
    if (menuButton.ariaExpanded == "false") {
        menuButton.ariaExpanded = "true"
    } else {
        menuButton.ariaExpanded = "false"
    }
}

// hier komt de menu naar buiten
function toggleMenu() {
    var deNav = document.querySelector("header nav");
    deNav.classList.toggle("toonMenu");
}

// de kleur van de logo veranderd 
function changeColorLogo() {
    var deLogo = document.querySelector("header svg");
    // deLogo.style.color = "white"; (nutteloos)
    deLogo.classList.toggle("ikBenNuWit");
}

// hier roep ik alles op
menuButton.addEventListener("click", function () {
    menuButtonKlik();
    toggleMenu();
    changeColorLogo();
});




// strugle: werkt alleen bij de eerste. heeft te maken met foute selector
var showElement = document.querySelector("footer h4");
var hiddenElement = document.querySelector("footer ul > li > ul");

showElement.addEventListener('click', function () {
    if (hiddenElement.style.display === 'none' || hiddenElement.style.display === '') {
        hiddenElement.style.display = 'block';
    } else {
        hiddenElement.style.display = 'none';
    }
});