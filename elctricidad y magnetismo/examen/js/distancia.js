function calcularDistancia(event) {
    // Evitar que la página se actualice
    event.preventDefault();

    // Obtener los valores de los campos de entrada
    const q1 = parseFloat(document.getElementById('q1').value);
    const q2 = parseFloat(document.getElementById('q2').value);
    const f = parseFloat(document.getElementById('f').value);

    // Definir constante de Coulomb
    const k = 9e9; // constante de Coulomb en unidades SI (N * m^2 / C^2)

    // Calcular la distancia usando la ley de Coulomb
    const r = Math.sqrt(k * q1 * q2 / f); // Math.sqrt es para obtener raiz cuadrada

    // Mostrar el resultado en el elemento HTML
    const resultadoEl = document.getElementById('resultado');
    resultadoEl.innerText = `${r} m`;

    // Limpiar los campos del formulario
    document.getElementById('q1').value = '';
    document.getElementById('q2').value = '';
    document.getElementById('f').value = '';

    // Añadir un listener para limpiar el resultado
    document.getElementById('calcular-btn').addEventListener('click', limpiarResultado);
  }

  // Función para limpiar el resultado
  function limpiarResultado() {
    const resultadoEl = document.getElementById('resultado');
    resultadoEl.innerText = '';
  }

  // Agregar un evento de envío al formulario de la funcion
  const formulario = document.querySelector('form');
  formulario.addEventListener('submit', calcularDistancia);