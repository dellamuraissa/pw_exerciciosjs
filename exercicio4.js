function calculateFuelCost() {
    const distance = parseFloat(document.getElementById('distance').value);
    const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
    
    if (isNaN(distance) || isNaN(fuelPrice) || distance < 0 || fuelPrice < 0) {
        alert("Por favor, insira valores válidos para a quilometragem e o valor do combustível.");
        return;
    }

    const consumptionRate = 8; // o veículo percorre 8 km por litro
    const fuelNeeded = distance / consumptionRate;
    const totalCost = fuelNeeded * fuelPrice;

    document.getElementById('fuelCostResult').textContent = 
        `Gasto total com combustível: R$ ${totalCost.toFixed(2)}`;
}
