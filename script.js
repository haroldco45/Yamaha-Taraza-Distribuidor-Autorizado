/* INTERACTIVIDAD POR VIBRAS POSITIVAS 
   Derechos de autor (3117700431)
*/

// 1. Cambiar el estilo del Navbar al hacer Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#000000'; // Negro sólido al bajar
        navbar.style.padding = '0.5rem 5%';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = '#1a1a1a'; // Color original
        navbar.style.padding = '1rem 5%';
        navbar.style.boxShadow = 'none';
    }
});

// 2. Efecto de aparición suave para las tarjetas de motos
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar el efecto a cada tarjeta
document.querySelectorAll('.moto-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// 3. Log de consola para verificar propiedad
console.log("App desarrollada por Vibras Positivas (3117700431) - Derechos de autor.");
