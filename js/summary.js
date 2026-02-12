document.addEventListener('DOMContentLoaded', () => {
  // Detalles de planes
  const planDetails = {
    "Plan Lector": [
      "✔ 3 libros al mes",
      "✔ 15 días para descargar",
      "✔ Calidad Media",
      "✔ Formato EPUB",
      "✔ Acceso a catálogo básico",
      "❌ Sin acceso a PDF",
      "❌ Sin soporte prioritario",
    ],
    "Plan Plus": [
      "✔ 8 libros al mes",
      "✔ 30 días para descargar",
      "✔ Calidad Alta",
      "✔ Formatos EPUB y PDF",
      "✔ Acceso a catálogo ampliado",
      "✔ Soporte técnico estándar",
      "❌ Sin acceso a audiolibros",
    ],
    "Plan Pro": [
      "✔ 15 libros al mes",
      "✔ 60 días para descargar",
      "✔ Calidad Ultra HD",
      "✔ Formatos EPUB y PDF",
      "✔ Acceso completo a la librería",
      "✔ Soporte técnico 24/7",
      "✔ Cancela en cualquier momento",
    ],
  };

  // Elementos del DOM
  const flipBtn = document.getElementById("flip-summary-btn");
  const flipBackBtn = document.getElementById("flip-back-btn");
  const summaryContainer = document.querySelector(".summary-container");
  const planDetailsList = document.getElementById("plan-details");

  // Función para manejar el flip del resumen
  flipBtn.addEventListener("click", () => {
    planDetailsList.innerHTML = "";
    const details = planDetails[currentPlanTitle] || [];
    details.forEach((detail) => {
      const li = document.createElement("li");
      li.innerHTML = detail;
      planDetailsList.appendChild(li);
    });
    summaryContainer.classList.add("flipped");
  });

  flipBackBtn.addEventListener("click", () => {
    summaryContainer.classList.remove("flipped");
  });

});