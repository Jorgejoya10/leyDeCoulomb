 // Función para calcular y mostrar la fuerza eléctrica
 function calcularCampoElectrico(event) {
  // Evitar que la página se actualice
  event.preventDefault();

  // Obtener los valores de los campos de entrada
  const cp = parseFloat(document.getElementById('cp').value);
  const q1 = parseFloat(document.getElementById('q1').value);


  // // Definir constante de Coulomb
  // const k = 9e9; // constante de Coulomb en unidades SI (N * m^2 / C^2)

  // Formula para Calcular el campo eléctrico
  const F = (cp*q1);

  // Mostrar el resultado en el elemento HTML
  const resultadoEl = document.getElementById('resultado');
  resultadoEl.innerText = `${F} N`;

  // Limpiar los campos del formulario
  document.getElementById('q1').value = '';
  document.getElementById('cp').value = '';

  // Añadir un listener para limpiar el resultado
  document.getElementById('calcular-btn').addEventListener('click', limpiarResultado);
}

// Función para limpiar el resultado
function limpiarResultado() {
  const resultadoEl = document.getElementById('resultado');
  resultadoEl.innerText = '';
}

// Agregar un evento de envío al formulario
const formulario = document.querySelector('form');
formulario.addEventListener('submit', calcularCampoElectrico);