document.addEventListener('DOMContentLoaded', () => {
  // Función para manejar la animación del encabezado con el movimiento del mouse
  document.addEventListener("mousemove", (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    document.querySelector(".nexus-header").style.transform =
      `translateX(${xAxis}px) translateY(${yAxis}px)`;
  });
});