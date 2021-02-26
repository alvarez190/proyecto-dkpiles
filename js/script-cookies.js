// Escondemos el aviso de las cookies
var div_cook = document.getElementById('cookies');
var bt_request = document.querySelector('.answer');

try {

    bt_request.addEventListener("click", function() {
        div_cook.style = "transition: transform 0.5s ease; transform: translateY(100%); ";

    }, false);
} catch (error) {
    console.log(error.message);
}

document.querySelector('.info').addEventListener('click', () => {
    window.open('http://www.interior.gob.es/politica-de-cookies', '_blank');
}, false);