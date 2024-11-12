function calculateIonicBond() {
    const metalElectrons = parseInt(document.getElementById('metalElectrons').value);
    const nonMetalElectrons = parseInt(document.getElementById('nonMetalElectrons').value);

    if (isNaN(metalElectrons) || isNaN(nonMetalElectrons) || metalElectrons <= 0 || nonMetalElectrons <= 0) {
        alert("Por favor, insira valores válidos para os elétrons.");
        return;
    }

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const divisor = gcd(metalElectrons, nonMetalElectrons);

    const metalRatio = nonMetalElectrons / divisor;
    const nonMetalRatio = metalElectrons / divisor;

    document.getElementById('ionicBondResult').textContent = 
        `Fórmula iônica: M${metalRatio === 1 ? '' : metalRatio}A${nonMetalRatio === 1 ? '' : nonMetalRatio}`;
}

function calculateCovalentBond() {
    const atom1Bonds = parseInt(document.getElementById('atom1Bonds').value);
    const atom2Bonds = parseInt(document.getElementById('atom2Bonds').value);

    if (isNaN(atom1Bonds) || isNaN(atom2Bonds) || atom1Bonds <= 0 || atom2Bonds <= 0) {
        alert("Por favor, insira valores válidos para as ligações.");
        return;
    }

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const divisor = gcd(atom1Bonds, atom2Bonds);

    const atom1Ratio = atom2Bonds / divisor;
    const atom2Ratio = atom1Bonds / divisor;

    document.getElementById('covalentBondResult').textContent = 
        `Fórmula molecular: A${atom1Ratio === 1 ? '' : atom1Ratio}B${atom2Ratio === 1 ? '' : atom2Ratio}`;
}
