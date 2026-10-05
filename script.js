const video = document.getElementById("videoCumple");
const botonVideo = document.getElementById("botonVideo");


botonVideo.addEventListener("click", () => {

    if (video.paused) {

        video.play();

        botonVideo.textContent =
            "⏸ PAUSAR AVENTURA";

    } else {

        video.pause();

        botonVideo.textContent =
            "▶ CONTINUAR AVENTURA";
    }

});


video.addEventListener("ended", () => {

    botonVideo.textContent =
        "🎮 VER NUEVAMENTE";

    lanzarCelebracion();

});


function crearParticula() {

    const particula =
        document.createElement("div");

    particula.classList.add("particula");

    particula.style.left =
        Math.random() * 100 + "vw";

    particula.style.animationDuration =
        (Math.random() * 3 + 2) + "s";


    const colores = [
        "#00ffff",
        "#39ff14",
        "#ffe600",
        "#ff00ff",
        "#a855f7"
    ];


    particula.style.background =
        colores[
            Math.floor(
                Math.random() *
                colores.length
            )
        ];


    document.body.appendChild(particula);


    setTimeout(() => {

        particula.remove();

    }, 5000);
}


function lanzarCelebracion() {

    for (let i = 0; i < 70; i++) {

        setTimeout(() => {

            crearParticula();

        }, i * 40);

    }

}


/* Algunas partículas ambientales */

setInterval(() => {

    crearParticula();

}, 700);