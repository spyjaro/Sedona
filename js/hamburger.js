window.addEventListener('resize', function() {
    if(window.innerWidth>321){
        var navElements = document.getElementsByClassName('nav__items');
        var navLogo = document.getElementsByClassName('nav__item--logo')
        navElements[0].style.visibility = "visible"
        navLogo[0].style.margin = 0;
    }
});

function toggleNavBar() {
    var hamburger = document.getElementById('nav-trigger');
    var main = document.getElementsByClassName('main');
    var navElements = document.getElementsByClassName('nav__items');
    var navLogo = document.getElementsByClassName('nav__item--logo');
    var navTrigger = document.getElementById('nav-trigger');
    var label = document.getElementById('label');

    if(hamburger.checked && window.innerWidth<321){
        label.className = "x-icon"
        navLogo[0].style.margin = '0';
        navLogo[0].visibility = "visible";
        navElements[0].style.visibility = "visible";
    }
    else if(!hamburger.checked ){
        label.className = "hamburger";
        var navElements = document.getElementsByClassName('nav__items');
        main[0].style.margin = '0';
        navLogo[0].style.marginTop = '-223px';
        navElements[0].style.visibility = "hidden";
        navTrigger.label.style.visibility = "hidden";
        navLogo.visibility = 'visible';
    }
}