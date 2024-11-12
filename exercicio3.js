function processNumbers() {
    const inputs = document.querySelectorAll('.number-input');
    const numbers = Array.from(inputs).map(input => parseInt(input.value));
    
    if (numbers.length !== 10) {
        alert("Por favor, insira 10 números.");
        return;
    }

    // Calculando a média
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    // Encontrando números acima da média
    const aboveAverage = numbers.filter(num => num > average);

    // Contando números menores que zero
    const negativeCount = numbers.filter(num => num < 0).length;

    // Exibindo os resultados
    document.getElementById('aboveAverage').textContent = 
        `Números acima da média (${average.toFixed(2)}): ${aboveAverage.join(', ')}`;
    
    document.getElementById('negativeCount').textContent = 
        `Quantidade de números menores que zero: ${negativeCount}`;
}
