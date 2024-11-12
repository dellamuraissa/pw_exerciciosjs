function calcularEstatisticas() {
    const numerosInput = document.getElementById('numeros').value;
    const numerosArray = numerosInput.split(',').map(num => parseInt(num.trim()));
    
    // Filtrar valores inválidos
    if (numerosArray.some(isNaN)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira apenas números inteiros separados por vírgulas.";
        return;
    }

    const soma = numerosArray.reduce((acc, num) => acc + num, 0);
    const media = soma / numerosArray.length;
    const pares = numerosArray.filter(num => num % 2 === 0).length;
    const impares = numerosArray.filter(num => num % 2 !== 0).length;

    document.getElementById('resultado').innerHTML = `
        <p>Soma de todos os números: ${soma}</p>
        <p>Média aritmética dos números: ${media.toFixed(2)}</p>
        <p>Quantidade de números pares: ${pares}</p>
        <p>Quantidade de números ímpares: ${impares}</p>
    `;
}
