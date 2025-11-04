// Navigation
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// BMI Calculator
document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    
    if (weight && height) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category = '';
        if (bmi < 18.5) category = 'Kurus';
        else if (bmi < 25) category = 'Normal';
        else if (bmi < 30) category = 'Gemuk';
        else category = 'Obesitas';
        
        document.getElementById('bmiResult').innerHTML = `
            <h3>BMI Anda: ${bmi}</h3>
            <p>Kategori: ${category}</p>
            <p>Usia: ${age}, Jenis Kelamin: ${gender === 'male' ? 'Laki-laki' : 'Perempuan'}</p>
            <p><strong>Tip:</strong> Jaga pola makan seimbang dan olahraga rutin!</p>
        `;
    }
});

// Pyramid Calculator
document.getElementById('pyramidForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const side = parseFloat(document.getElementById('side').value);
    const heightP = parseFloat(document.getElementById('heightP').value);
    
    if (side && heightP) {
        const volume = ((side * side * heightP) / 3).toFixed(2);
        const slantHeight = Math.sqrt((side / 2) ** 2 + heightP ** 2);
        const surfaceArea = (side * side + 2 * side * slantHeight).toFixed(2);
        const perimeter = (4 * side).toFixed(2);
        
        document.getElementById('pyramidResult').innerHTML = `
            <h3>Hasil Perhitungan:</h3>
            <p>Volume: ${volume} cm³</p>
            <p>Luas Permukaan: ${surfaceArea} cm²</p>
            <p>Keliling Alas: ${perimeter} cm</p>
        `;
    }
});

// Extra Features
const tips = [
    "Minum 8 gelas air per hari untuk kesehatan optimal.",
    "Olahraga minimal 30 menit sehari.",
    "Makan sayur dan buah setiap hari.",
    "Tidur 7-8 jam malam hari."
];

function generateTip() {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('dailyTip').textContent = randomTip;
}

function convertTemp() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5 + 32).toFixed(2);
        document.getElementById('tempResult').textContent = `${celsius}°C = ${fahrenheit}°F`;
    }
}

// Initialize
generateTip();
