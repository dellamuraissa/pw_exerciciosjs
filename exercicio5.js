function calculateFlooringCost() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert("Por favor, insira valores válidos para o comprimento e a largura do cômodo.");
        return;
    }

    const area = length * width; // Calcula a área em m²
    const pricePerSquareMeter = 36.00; // Preço fixo por m²
    const totalCost = area * pricePerSquareMeter;

    document.getElementById('flooringCostResult').textContent = 
        `Custo total para assentar o piso: R$ ${totalCost.toFixed(2)}`;
}
