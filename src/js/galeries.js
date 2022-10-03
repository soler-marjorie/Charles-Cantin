let myButtons = document.querySelectorAll('.visiblePhoto');
let galeries = document.querySelectorAll('.photos');

myButtons.forEach((btn, i) => {
    function galerie(){
        if (galeries[i].style.display === "none") {
            galeries[i].style.display = "block";
        } else {
            galeries[i].style.display = "none";
        }

        return btn[i] = galeries[i];
    };
    btn.addEventListener('click', galerie)
});