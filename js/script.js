// Selecciona los elementos del DOM
const readMoreBtn = document.getElementById("read-more-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const aboutModal = document.getElementById("about-modal");

// Abre el modal al hacer clic en "Leer más"
readMoreBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Evita que el enlace recargue la página
  aboutModal.style.display = "flex"; // Muestra el modal
});

// Cierra el modal al hacer clic en el botón de cierre
closeModalBtn.addEventListener("click", () => {
  aboutModal.style.display = "none"; // Oculta el modal
});

// Cierra el modal si se hace clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === aboutModal) {
    aboutModal.style.display = "none"; // Oculta el modal
  }
});
