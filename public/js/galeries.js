
//variables qui récupèrent les boutons et les galeries photos
let myButtons = document.querySelectorAll('.visiblePhoto');
let galeries = document.querySelectorAll('.photos');

//fonction forEach qui dit que pour chaque boutons, l'action se déclanchera
myButtons.forEach((btn, i) => {

    //fonction qui rend visible ou non les galeries
    function galerie(){
        if (galeries[i].style.display === "none") {
            galeries[i].style.display = "block";
        } else {
            galeries[i].style.display = "none";
        }
    }
    btn.addEventListener('click', galerie)
});