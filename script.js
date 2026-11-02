function mostrarPantalla2() {
    const pantalla1 = document.getElementById('pantalla1');
    const pantalla2 = document.getElementById('pantalla2');

    pantalla1.style.display = "none";
    pantalla2.classList.remove("hidden-section");
}

function aceptarInvitacion() {

    document.querySelector('.boton').style.display = "none";

        const textoPregunta = document.querySelector('#pantalla2 > p');
    if (textoPregunta) {
        textoPregunta.style.display = "none";
    }

    //Muestra mensaje de espera con felicidad
    const mensaje = document.getElementById('mensajeRespuesta');
    mensaje.textContent = "¡Siiii! Estare esperando con ansias ese dia";
    
    //oculta los botones despues de aceptar
    document.querySelector('.boton').style.display = "none";

    //Aperece el gato con una animación desde abajo
    const contenedorExito = document.getElementById('contenedorExito');
    contenedorExito.classList.remove("oculta");

    //Me envia notificación al correo de gmail
    fetch("https://formspree.io/f/xljjozeq", {
        method: "POST",
        headers:{"Content-Type": "application/json" },
        body: JSON.stringify({
            respuesta: "Dijo que SIIII",
            fecha: new Date().toLocaleString()
        })
    });
}

function rechazarInvitacion() {
    // 1. Oculta los botones usando tu clase .buton
    document.querySelector('.boton').style.display = "none";

    // 2. En lugar de mostrar al gato, simplemente cambiamos el texto de la pregunta por el mensaje de rechazo
    const textoPregunta = document.querySelector('#pantalla2 > p');
    if (textoPregunta) {
        textoPregunta.textContent = "Bueno lo intente, espero y en otro momento si se pueda 🥲";
    }

    // Nota: Al no tocar para nada a 'contenedorExito', el gato se queda completamente oculto.

    // 3. Notificación Formspree
    fetch("https://formspree.io/f/xljjozeq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            respuesta: "Dijo que no...",
            fecha: new Date().toLocaleString()
        })
    }).catch(err => console.error(err));
}

//https://formspree.io/f/mbggpkvr