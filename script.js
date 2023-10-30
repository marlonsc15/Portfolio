const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
let hidden = document.getElementById('hidden');
let menuOpen = false;
const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
const number = document.getElementById('number');
const phoneNumber = document.getElementById('phoneNumber');
const arrow = document.getElementById('arrow');
const projectImage = document.querySelectorAll('.projectImage');
const menuLink = document.querySelectorAll('.menuLink');
const main = document.getElementById('main');

menuBtn.addEventListener('click', () => {

    if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.style.display = 'block';
        menuOpen = true;
        hidden.style.display = 'block';
    } else {
        menuBtn.classList.remove('open');
        menu.style.display = 'none';
        menuOpen = false;
        hidden.style.display = 'none';
    }
});

if (window.innerWidth < 1200) {
    menuLink.forEach(link => {
        link.addEventListener('click', () => {
            menu.style.display = 'none'
            menuBtn.classList.remove('open');
            menuOpen = false;
            hidden.style.display = 'none';
        });
    });

}



hidden.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    menu.style.display = 'none';
    menuOpen = false;
    hidden.style.display = 'none';
})


projectImage[0].addEventListener('click', () => {
    window.open('https://marlonsc15.github.io/Coffe-front-page/');
})

projectImage[1].addEventListener('click', () => {
    window.open('https://marlonsc15.github.io/pokemon/');
})

projectImage[2].addEventListener('click', () => {
    window.open('https://marlonsc15.github.io/Rocket-Countdown/');
})

projectImage[3].addEventListener('click', () => {
    window.open('https://marlonsc15.github.io/RocketFlix/');
})

projectImage[4].addEventListener('click', () => {
    window.open('https://marlonsc15.github.io/Homepage-Youtube/');
})

projectImage[5].addEventListener('click', () => {
    window.open('https://marlonsc15.github.io/iframe-social/');
})



const iconCss = document.querySelectorAll('.iconCss');
const showCss = document.querySelectorAll('.Css');

iconCss[0].addEventListener('mouseover', () => {
    showCss[0].style.display = 'block'
})

iconCss[0].addEventListener('mouseout', () => {
    showCss[0].style.display = 'none'
})

iconCss[1].addEventListener('mouseover', () => {
    showCss[1].style.display = 'block'
})

iconCss[1].addEventListener('mouseout', () => {
    showCss[1].style.display = 'none'
})

iconCss[2].addEventListener('mouseover', () => {
    showCss[2].style.display = 'block'
})

iconCss[2].addEventListener('mouseout', () => {
    showCss[2].style.display = 'none'
})

iconCss[3].addEventListener('mouseover', () => {
    showCss[3].style.display = 'block'
})

iconCss[3].addEventListener('mouseout', () => {
    showCss[3].style.display = 'none'
})

iconCss[4].addEventListener('mouseover', () => {
    showCss[4].style.display = 'block'
})

iconCss[4].addEventListener('mouseout', () => {
    showCss[4].style.display = 'none'
})

iconCss[5].addEventListener('mouseover', () => {
    showCss[5].style.display = 'block'
})

iconCss[5].addEventListener('mouseout', () => {
    showCss[5].style.display = 'none'
})

//////////

const iconHtml = document.querySelectorAll('.iconHtml');
const showHtml = document.querySelectorAll('.Html');

iconHtml[0].addEventListener('mouseover', () => {
    showHtml[0].style.display = 'block'
})

iconHtml[0].addEventListener('mouseout', () => {
    showHtml[0].style.display = 'none'
})

iconHtml[1].addEventListener('mouseover', () => {
    showHtml[1].style.display = 'block'
})

iconHtml[1].addEventListener('mouseout', () => {
    showHtml[1].style.display = 'none'
})

iconHtml[2].addEventListener('mouseover', () => {
    showHtml[2].style.display = 'block'
})

iconHtml[2].addEventListener('mouseout', () => {
    showHtml[2].style.display = 'none'
})

iconHtml[3].addEventListener('mouseover', () => {
    showHtml[3].style.display = 'block'
})

iconHtml[3].addEventListener('mouseout', () => {
    showHtml[3].style.display = 'none'
})

iconHtml[4].addEventListener('mouseover', () => {
    showHtml[4].style.display = 'block'
})

iconHtml[4].addEventListener('mouseout', () => {
    showHtml[4].style.display = 'none'
})

iconHtml[5].addEventListener('mouseover', () => {
    showHtml[5].style.display = 'block'
})

iconHtml[5].addEventListener('mouseout', () => {
    showHtml[5].style.display = 'none'
})

////////////

const iconJs = document.querySelectorAll('.iconJs');
const showJs = document.querySelectorAll('.Js');

iconJs[0].addEventListener('mouseover', () => {
    showJs[0].style.display = 'block'
})

iconJs[0].addEventListener('mouseout', () => {
    showJs[0].style.display = 'none'
})

iconJs[1].addEventListener('mouseover', () => {
    showJs[1].style.display = 'block'
})

iconJs[1].addEventListener('mouseout', () => {
    showJs[1].style.display = 'none'
})

iconJs[2].addEventListener('mouseover', () => {
    showJs[2].style.display = 'block'
})

iconJs[2].addEventListener('mouseout', () => {
    showJs[2].style.display = 'none'
})

iconJs[3].addEventListener('mouseover', () => {
    showJs[3].style.display = 'block'
})

iconJs[3].addEventListener('mouseout', () => {
    showJs[3].style.display = 'none'
})

iconJs[4].addEventListener('mouseover', () => {
    showJs[4].style.display = 'block'
})

iconJs[4].addEventListener('mouseout', () => {
    showJs[4].style.display = 'none'
})



window.sr = ScrollReveal({ reset: true });


var fromLeft = {
    distance: '150%',
    origin: 'left',
    opacity: null,
    duration: 2000,
};

var fromBottom = {
    distance: '300%',
    origin: 'bottom',
    opacity: 0,
    duration: 2000
};


sr.reveal('.welcome', { duration: 1000, scale: 0.5 });
sr.reveal('.projectBox', fromLeft);
sr.reveal('.aboutMeText', {
    distance: '30%',
    origin: 'bottom',
    opacity: 0,
    duration: 1000
});

linkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/marlonsc/');
})

github.addEventListener('click', () => {
    window.open('https://github.com/marlonsc15');
})

number.addEventListener('click', () => {
    phoneNumber.style.display = 'flex'
})


arrow.addEventListener('click', () => {
    phoneNumber.style.display = 'none'
})