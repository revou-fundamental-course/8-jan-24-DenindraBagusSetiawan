function calculate() {
    var sideLength = document.getElementById("sideLength").value;

    if (sideLength === "" || isNaN(sideLength)) {
        alert("Masukkan panjang sisi yang valid.");
        return;
    }

    var area = sideLength * sideLength;
    var perimeter = 4 * sideLength;

    var calculationResult = `
        <p>Perhitungan:</p>
        <p>Luas = ${sideLength} x ${sideLength} = ${area}</p>
        <p>Keliling = 4 x ${sideLength} = ${perimeter}</p>
    `;

    document.getElementById("calculation").innerHTML = calculationResult;

    document.getElementById("area").innerText = "Luas: " + area;
    document.getElementById("perimeter").innerText = "Keliling: " + perimeter;
}

function reset() {
    document.getElementById("sideLength").value = "";
    document.getElementById("formula").innerText = "Rumus: Luas = sisi x sisi, Keliling = 4 x sisi";
    document.getElementById("calculation").innerText = "Perhitungan: ";
    document.getElementById("area").innerText = "Luas: ";
    document.getElementById("perimeter").innerText = "Keliling: ";
}
