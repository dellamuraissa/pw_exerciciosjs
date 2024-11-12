function checkAlloyComposition() {
    const metalPercentage = parseFloat(document.getElementById('metalPercentage').value);
    const nonMetalPercentage = parseFloat(document.getElementById('nonMetalPercentage').value);

    if (isNaN(metalPercentage) || isNaN(nonMetalPercentage)) {
        alert("Por favor, insira valores válidos para os percentuais.");
        return;
    }

    const totalPercentage = metalPercentage + nonMetalPercentage;

    if (totalPercentage !== 100) {
        document.getElementById('resultMessage').textContent = 
            "A soma dos percentuais deve ser igual a 100%. Verifique os valores inseridos.";
    } else if (metalPercentage > nonMetalPercentage) {
        document.getElementById('resultMessage').textContent = 
            "A liga é predominantemente metálica.";
    } else if (nonMetalPercentage > metalPercentage) {
        document.getElementById('resultMessage').textContent = 
            "A liga é predominantemente ametálica.";
    } else {
        document.getElementById('resultMessage').textContent = 
            "A liga possui quantidades iguais de metal e ametal.";
    }
}
