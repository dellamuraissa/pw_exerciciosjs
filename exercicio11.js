function analyzeComposition() {
    const metalPercentage = parseFloat(document.getElementById('metalInput').value);
    const ametalPercentage = parseFloat(document.getElementById('ametalInput').value);

    
    if (isNaN(metalPercentage) || isNaN(ametalPercentage)) {
        alert("Por favor, insira valores numéricos válidos para as porcentagens.");
        return;
    }
    
    if (metalPercentage + ametalPercentage !== 100) {
        alert("A soma das porcentagens de metal e ametal deve ser igual a 100%.");
        return;
    }

    let resultMessage = "";
    if (metalPercentage > 50) {
        resultMessage = "A liga é predominantemente metálica.";
    } else if (ametalPercentage > 50) {
        resultMessage = "A liga é predominantemente ametálica.";
    } else {
        resultMessage = "A liga possui composição equilibrada entre metal e ametal.";
    }

    document.getElementById('resultMessage').textContent = resultMessage;
}
