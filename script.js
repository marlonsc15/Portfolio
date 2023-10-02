const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
let hidden = document.getElementById('hidden');
let menuOpen = false;
let main = document.getElementById('main');
let tools = document.getElementById('tools');
let description = document.getElementById('toolsDescription');
let desktopDescription = document.querySelectorAll('.toolsDesktopDescription');
let icon = document.querySelectorAll('.iconBox');

let slide1 = document.getElementById('img1');
let slide2 = document.getElementById('img2');
let slide3 = document.getElementById('img3');
let slide4 = document.getElementById('img4');
let slide5 = document.getElementById('img5');
let projectsDescription = document.getElementById('projectDescription');

let bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');
let bar3 = document.getElementById('bar3');
let bar4 = document.getElementById('bar4');
let bar5 = document.getElementById('bar5');

let count = 1;
document.getElementById('slide1').checked = true;

const toolsDescriptions = [
    'Não somente sei usar o CSS, mas tambem tenho conhecimento em SCSS para criar os mais variados tipos de estilos para meus apps',
    'A framekork Angular 2+ é a framekork que tenho mais projetos feitos, de paginas simples até aplicações mais completas como por exemplo um site de gestão de igrejas!',
    'Um médico deve conhecer bem o esqueleto do corpo humano não é mesmo? Assim deve ser o conhecimento de um programador frontEnd sobre o esqueleto das aplicações que é o HTML 5, e isto é algo que estou disposto a masterizar!',
    'Nada que um evento de click ou time não resolva não é mesmo? A linguagem de programação Javascript e algumas vezes Typescript é a linguagem que mais utilizo em meus projetos!'
]

const projectsDescriptions = [
    'projeto 1',
    'projeto 2',
    'projeto 3',
    'projeto 4',
    'projeto 5'
]

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

hidden.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    menu.style.display = 'none';
    menuOpen = false;
    hidden.style.display = 'none';
})

icon[0].addEventListener('click', () => {
    description.innerHTML = toolsDescriptions[0];
})

icon[1].addEventListener('click', () => {
    description.innerHTML = toolsDescriptions[1];
    desktopDescription[0].innerHTML = toolsDescriptions[0];
    
})

icon[2].addEventListener('click', () => {
    description.innerHTML = toolsDescriptions[2];
    desktopDescription[2].innerHTML = toolsDescriptions[2];
})

icon[3].addEventListener('click', () => {
    description.innerHTML = toolsDescriptions[3];
    desktopDescription[3].innerHTML = toolsDescriptions[3];
})

slide1.addEventListener('click', () => {
    window.location.href = "https://github.com/marlonsc15"
})

slide2.addEventListener('click', () => {
    window.location.href = "https://github.com/marlonsc15"
})

slide3.addEventListener('click', () => {
    window.location.href = "https://github.com/marlonsc15"
})

slide4.addEventListener('click', () => {
    window.location.href = "https://github.com/marlonsc15"
})

slide5.addEventListener('click', () => {
    window.location.href = "https://github.com/marlonsc15"
})

bar1.addEventListener('click', () => {
    projectsDescription.innerHTML = projectsDescriptions[0]
})

bar2.addEventListener('click', () => {
    projectsDescription.innerHTML = projectsDescriptions[1]
})

bar3.addEventListener('click', () => {
    projectsDescription.innerHTML = projectsDescriptions[2]
})

bar4.addEventListener('click', () => {
    projectsDescription.innerHTML = projectsDescriptions[3]
})

bar5.addEventListener('click', () => {
    projectsDescription.innerHTML = projectsDescriptions[4]
})

    setInterval (function() {
        nextImage();
    }, 3000)
    
    function nextImage() {
        count++;
        if (count>5) {
            count = 1;
        }
        document.getElementById('slide'+count).checked = true;
    }
    
tools.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: 'smooth'})
})
