// Varables fecha
var f = new Date();
var ano = f.getFullYear();
var mes = f.getMonth();
var dia = f.getDate();

var estiloDia;

var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
var diasMes = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var diaMaximo = diasMes[mes];

window.addEventListener('load', () => {
    document.querySelector('h3#day').innerHTML = "DIA: " + dia + " / " + mes + " / " + ano;


    // Aqui añado eventos al los botones imagen con jquery
    $("main section input[type='image']").click(function(e) {
        let link = $(this).attr('link');
        location.href = link;
    });
});