function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  menu.classList.toggle("open");
}

document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));

    toggleMenu(); // cierra menú

    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  });
});



function abrirCV() {
    window.open("recursos/CVMihaiSilePavelAsiminei2026.pdf", "_blank")
}

function descargarCV() {
    const link = document.createElement('a');
    link.href = 'recursos/CVMihaiSilePavelAsiminei2026.pdf';
    link.download = 'CV_MihaiSilePavelAsiminei2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function contactar() {
    location.href ="#contacto"
}

function linkedin() {
    location.href = "https://www.linkedin.com/in/mihai-sile-pavel-asiminei-ba2423398/"
}

function github() {
    location.href = "https://github.com/jorgems-dev"
}

function gmail() {
    location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=jorgemihai21@gmail.com"
}

function telefono() {
    location.href = "tel:+34644959149"
}

function restapi() {
    location.href = "https://github.com/jorgems-dev/StreetFit";
}
function cliente() {
    location.href = "https://github.com/jorgems-dev/Cliente-StreetFit";
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach(section => observer.observe(section));
});





