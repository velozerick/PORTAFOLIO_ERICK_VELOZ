
//PARTICULAS

document.addEventListener("DOMContentLoaded", function () {
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles');
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
    }
});

//CERTIFICADOS Y RECONOCIMIENTOS

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.certificado');
    const totalSlides = slides.length;
    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    document.querySelector('.carousel').style.transform = `translateX(-${currentSlide * 100}%)`;
}
function openLightbox(element) {
    var lightbox = document.getElementById("lightbox");
    var zoomedImage = document.getElementById("zoomedImage");
    zoomedImage.src = element.src;
    lightbox.style.display = "flex";  // Mostrar el lightbox en modo 'flex'
}

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";  // Ocultar el lightbox
}



