const language = document.getElementById("languages").innerHTML;
let changeInfo = document.querySelector("#personal-info-paragraph");

function lang_mouseOver() {
  document.getElementById("languages").innerHTML =
    "¿Which technologies do I use?";
  language.innerHTML.style.transition = "all 2s";
}

function lang_mouseLeave() {
  document.getElementById("languages").innerHTML = "¿Que tecnologías uso?";
  language.innerHTML.style.transition = "all 2s";
}

function changeMouseOver() {
  document.getElementById("personal-info-paragraph").innerHTML =
    "          My name is Thiago Demian Dominguez I am 21 years old, I was born in Entre Rios, Argentina and currently reside in the province of Corrientes, Argentina. I am a FrontEnd developer in the process of FullStack, I entered the world of programming in 2017 with arduino in robotics, but I started programming web apps in early 2021.I am a person who is constantly looking to improve myself and who likes to work in a group, even though I work most of the time alone.";
  document.getElementById("personal-info-paragraph").style.animation = "all 2s";
}
function changeMouseLeave() {
  document.getElementById("personal-info-paragraph").innerHTML =
    "          Mi nombre es Thiago Demian Dominguez tengo 21 años, nací en Entre Rios , Argentina y actualmente resido en la provincia de Corrientes,Argentina. Soy desarrollador FrontEnd en proceso de FullStack, entré al mundo de la programacion en 2017 con arduino en robótica, pero empecé a programar apps web a principios de 2021.Soy una persona que constantemente busca superarse y que le gusta trabajar en grupo , a pesar de que trabajo la mayor parte del tiempo solo.";
}

function changeProjectsOver() {
  document.getElementById("portafolio-proyectos").innerHTML = "Projects";
}

function changeProjectsLeave() {
  document.getElementById("portafolio-proyectos").innerHTML = "Proyectos";
}
