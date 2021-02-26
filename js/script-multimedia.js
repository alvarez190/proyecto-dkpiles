// Doy la funcion de saltar una alerta con la imagen cliqueada.

$(document).ready(function() {
    $('div img').click(function(e) {
        Swal.fire({
            imageUrl: $(this).attr('src'),
            imageAlt: 'dkpiles',
            showCloseButton: true,
        })
    });
});