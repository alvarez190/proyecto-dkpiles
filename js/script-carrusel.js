window.onload = function() {
    // Variables
    const IMAGENES = [
        '../img/photos/zip1/DSC_0061.JPG',
        '../img/photos/zip1/DSC_0080.JPG',
        '../img/photos/zip1/DSC_0103.JPG',
        '../img/photos/zip1/DSC_0181.JPG',
        '../img/photos/zip1/DSC_0232.JPG',
        '../img/photos/zip1/mar.jpg',
        '../img/photos/zip1/playa.jpg',
        '../img/photos/zip2/DSC_0037.JPG',
        '../img/photos/zip2/DSC_0040.JPG',
        '../img/photos/zip2/DSC_0104.JPG',
        '../img/photos/zip2/DSC_0132.JPG',
        '../img/photos/zip2/DSC_0225.JPG',
        '../img/photos/zip2/DSC_0318.JPG',
        '../img/photos/zip3/IMG_20200802_201649.jpg',
        '../img/photos/zip3/IMG_20200802_201657.jpg',
        '../img/photos/zip3/IMG_20200802_201820.jpg',
        '../img/photos/zip3/IMG_20200807_235301.jpg'
    ];

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 2000;

    let posicionActual = 0;
    let $botonRetroceder = document.getElementById('retroceder');
    let $botonAvanzar = document.getElementById('avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if (posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);

    // Iniciar
    renderizarImagen();
    playIntervalo();
}