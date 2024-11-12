function calculateResultantForce() {
    const mass = parseFloat(document.getElementById('mass').value);
    const acceleration1 = parseFloat(document.getElementById('acceleration1').value);
    const acceleration2 = parseFloat(document.getElementById('acceleration2').value);

    if (isNaN(mass) || isNaN(acceleration1) || isNaN(acceleration2) || mass <= 0) {
        alert("Por favor, insira valores válidos para massa e acelerações.");
        return;
    }

    const resultantAcceleration = Math.abs(acceleration1 - acceleration2);
    const resultantForce = mass * resultantAcceleration;

    document.getElementById('resultantForceResult').textContent = 
        `Força resultante: ${resultantForce.toFixed(2)} N`;
}

function calculateActionReactionForce() {
    const mass1 = parseFloat(document.getElementById('mass1').value);
    const accelerationObj1 = parseFloat(document.getElementById('accelerationObj1').value);
    const mass2 = parseFloat(document.getElementById('mass2').value);
    const accelerationObj2 = parseFloat(document.getElementById('accelerationObj2').value);

    if (isNaN(mass1) || isNaN(accelerationObj1) || isNaN(mass2) || isNaN(accelerationObj2) || mass1 <= 0 || mass2 <= 0) {
        alert("Por favor, insira valores válidos para massas e acelerações.");
        return;
    }

    const actionForce = mass1 * accelerationObj1;
    const reactionForce = mass2 * accelerationObj2;

    document.getElementById('actionReactionForceResult').textContent = 
        `Força de ação/reação: ${actionForce.toFixed(2)} N e ${reactionForce.toFixed(2)} N (mesma magnitude, sentidos opostos)`;
}
