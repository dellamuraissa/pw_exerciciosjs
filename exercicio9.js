let valuesArray = [];

function addValue() {
    const valueInput = document.getElementById('valueInput');
    const value = parseFloat(valueInput.value);

    if (isNaN(value)) {
        alert("Por favor, insira um valor numérico válido.");
        return;
    }

    valuesArray.push(value);
    valueInput.value = '';
    document.getElementById('resultMessage').textContent = "Valor adicionado!";
}

function showAllValues() {
    if (valuesArray.length === 0) {
        document.getElementById('resultMessage').textContent = "Nenhum valor foi inserido.";
    } else {
        document.getElementById('resultMessage').textContent = "Valores inseridos: " + valuesArray.join(', ');
    }
}

function showMaxValue() {
    if (valuesArray.length === 0) {
        document.getElementById('resultMessage').textContent = "Nenhum valor foi inserido.";
    } else {
        const maxValue = Math.max(...valuesArray);
        document.getElementById('resultMessage').textContent = "Maior valor: " + maxValue;
    }
}

function showMinValue() {
    if (valuesArray.length === 0) {
        document.getElementById('resultMessage').textContent = "Nenhum valor foi inserido.";
    } else {
        const minValue = Math.min(...valuesArray);
        document.getElementById('resultMessage').textContent = "Menor valor: " + minValue;
    }
}
