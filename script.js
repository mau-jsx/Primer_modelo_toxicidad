let model;

async function cargarModelo() {
    model = await toxicity.load();
    console.log('Modelo cargado');
}

async function analizarOracion() {
    const oracion = document.getElementById('oracion').value;
    const resultado = document.getElementById('resultado');

    if (!model) {
        resultado.innerHTML = 'El modelo aún no ha sido cargado.';
        return;
    }

    // Realizar la predicción
    const predictions = await model.classify([oracion]);

    // Mostrar los resultados
    resultado.innerHTML = `<pre>${JSON.stringify(predictions, null, 2)}</pre>`;
}

// Cargar el modelo al iniciar la página
cargarModelo();
