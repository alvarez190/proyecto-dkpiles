var bt_login = document.getElementById('bt-login');
var bt_register = document.getElementById('bt-register');

var div_login = document.getElementById('login');
var div_register = document.getElementById('register-user');


window.addEventListener('load', () => {
    bt_login.style.display = "none";
    div_register.style.display = "none";

    bt_register.addEventListener('click', () => {
        bt_login.style.display = "block";
        div_register.style.display = "block";
        bt_register.style.display = "none";
        div_login.style.display = "none";
    });

    bt_login.addEventListener('click', () => {
        bt_register.style.display = "block";
        div_login.style.display = "block";
        bt_login.style.display = "none";
        div_register.style.display = "none";
    });
});