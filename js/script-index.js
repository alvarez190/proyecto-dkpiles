// Despligue de menu en version movil

var menu = document.getElementById('menu')
var hamburger = document.querySelector(".hamburger");
var main = document.querySelector('main');

window.addEventListener('load', () => {
    var heightScreen = window.innerHeight;
    var widthScreen = window.innerWidth;

    if (widthScreen < 992) {
        menu.style = "opacity:0; visibility:hidden;";
    } else {
        menu.style = "opacity:1; visibility:visible;";
    }
    hamburger.addEventListener("click", function() {

        if (this.classList.toggle("is-active")) {
            menu.style = "transition: all 0.6s ease; opacity:1; visibity:visible; "
            document.querySelector('main').style = "transition: all 0.3s ; filter: blur(5px);"

        } else {
            menu.style = "transition: all 0.6s ease; opacity:0; visibity:hidden; "
            document.querySelector('main').style = "transition: all 0.3s ; filter: blur(0px);"

        }
    }, false);
});