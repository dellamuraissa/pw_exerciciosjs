function calculateExponential() {
    const x = parseFloat(document.getElementById('valueInput').value);

    if (isNaN(x)) {
        alert("Por favor, insira um valor numérico válido para x.");
        return;
    }

    const exponentialValue = Math.exp(x);
    document.getElementById('resultMessage').textContent = `f(${x}) = e^${x} ≈ ${exponentialValue.toFixed(4)}`;
}
