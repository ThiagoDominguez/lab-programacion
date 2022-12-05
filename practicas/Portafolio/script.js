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
    "My name is Thiago Demian Dominguez, i'm 21 yo and i'm from Entre Rios, Argentina. I'm FrontEnd Developer FullStack in process";
}
function changeMouseLeave() {
  document.getElementById("personal-info-paragraph").innerHTML =
    "Mi nombre es Thiago Demian Dominguez tengo 21 años, soy de Entre Rios , Argentina. Soy desarrollador FrontEnd en proceso de FullStack";
}
