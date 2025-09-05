// 🔹 Scroll suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 🔹 Animación de aparición en secciones
const secciones = document.querySelectorAll('section');

const mostrarSeccion = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(mostrarSeccion, {
  threshold: 0.2
});

secciones.forEach(seccion => {
  observer.observe(seccion);
});

// 🔹 Animación botón de WhatsApp
const whatsappBtn = document.querySelector('.whatsapp');
setInterval(() => {
  whatsappBtn.classList.toggle('pulse');
}, 1000);

// 🔹 Botón de modo oscuro
const botonModo = document.createElement('button');
botonModo.textContent = "🌙 / ☀️";
botonModo.classList.add("modo-btn");
document.querySelector("footer").appendChild(botonModo);

botonModo.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");
});