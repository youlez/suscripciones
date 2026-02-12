
document.addEventListener('DOMContentLoaded', () => {
  const MAX_BOOKS = 15;
  const MAX_DAYS = 60;

  // Función para obtener colores según nivel
  function getColorByLevel(level) {
    switch (level) {
      case "0":
        return "#ffc0c0";
      case "Media":
        return "#ffd834";
      case "Alta":
        return "#4cd4ff";
      case "Ultra":
        return "#91d99a";
      default:
        return "#91d99a";
    }
  }

  // Elementos del DOM
  const cards = document.querySelectorAll(".card");
  const booksEl = document.getElementById("books");
  const daysEl = document.getElementById("days");
  const qualityEl = document.getElementById("quality");
  const formatEl = document.getElementById("format");
  const booksBar = document.getElementById("books-bar");
  const daysBar = document.getElementById("days-bar");
  const summaryContainer = document.querySelector(".summary-container");

  // Función para manejar clic en tarjetas
  function handleCardClick(card) {
    // Remover clase activa de todas las tarjetas
    cards.forEach((c) => c.classList.remove("active"));
    // Agregar clase activa a la tarjeta seleccionada
    card.classList.add("active");

    // Obtener valores actuales y objetivos
    const currentBooks = parseInt(booksEl.textContent) || 0;
    const targetBooks = parseInt(card.dataset.books) || 0;
    const booksPercent = Math.round((targetBooks / MAX_BOOKS) * 100);

    const currentDays = parseInt(daysEl.textContent) || 0;
    const targetDays = parseInt(card.dataset.days) || 0;
    const daysPercent = Math.round((targetDays / MAX_DAYS) * 100);

    const targetColor = getColorByLevel(card.dataset.quality);

    // Resetear estado del resumen
    summaryContainer.classList.remove("flipped");

    // Animaciones con Anime.js
    anime
      .timeline()
      .add(
        {
          targets: booksEl,
          innerHTML: [currentBooks, targetBooks],
          round: 1,
          duration: 700,
          easing: "easeInOutQuart",
        },
        0,
      )
      .add(
        {
          targets: booksBar,
          width: booksPercent + "%",
          backgroundColor: targetColor,
          duration: 700,
          easing: "easeInOutQuart",
        },
        0,
      )
      .add(
        {
          targets: daysEl,
          innerHTML: [currentDays, targetDays],
          round: 1,
          duration: 700,
          easing: "easeInOutQuart",
        },
        120,
      )
      .add(
        {
          targets: daysBar,
          width: daysPercent + "%",
          backgroundColor: targetColor,
          duration: 700,
          easing: "easeInOutQuart",
        },
        120,
      );

    // Actualizar elementos de calidad y formato
    qualityEl.textContent = card.dataset.quality;
    qualityEl.style.color = getColorByLevel(card.dataset.quality);
    formatEl.textContent = card.dataset.format;

    // Efecto de escala en calidad y formato
    [qualityEl, formatEl].forEach((el) => {
      el.style.transform = "scale(1.12)";
      setTimeout(() => (el.style.transform = "scale(1)"), 220);
    });

    // Guardar título del plan actual
    currentPlanTitle = card.querySelector("h3").textContent;
    summaryContainer.classList.add("visible");
  }

  // Función para manejar hover en tarjetas
  function handleCardHover(card) {
    card.addEventListener("mouseenter", () => {
      anime({
        targets: card.querySelector("h3"),
        translateX: 5,
        duration: 300,
        easing: "easeOutQuad",
      });
    });

    card.addEventListener("mouseleave", () => {
      anime({
        targets: card.querySelector("h3"),
        translateX: 0,
        duration: 300,
        easing: "easeOutQuad",
      });
    });
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => handleCardClick(card));
    handleCardHover(card);
  });
});