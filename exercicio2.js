function converterTemperatura() {
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    const escala = document.getElementById('escala').value;
    let resultado = 0;

    if (isNaN(temperatura)) {
        document.getElementById('resultado').textContent = "Por favor, insira um valor válido.";
        return;
    }

    if (escala === "Celsius") {
        resultado = (temperatura * 1.8) + 32;
        document.getElementById('resultado').textContent = `${temperatura}°C é igual a ${resultado.toFixed(2)}°F`;
    } else {
        resultado = (temperatura - 32) / 1.8;
        document.getElementById('resultado').textContent = `${temperatura}°F é igual a ${resultado.toFixed(2)}°C`;
    }
}

function limparCampos() {
    document.getElementById('temperatura').value = '';
    document.getElementById('resultado').textContent = '';
}
