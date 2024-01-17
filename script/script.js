function calculate() {
    var sideLength = document.getElementById("sideLength").value;

    if (sideLength === "" || isNaN(sideLength)) {
        alert("Masukkan panjang sisi yang valid.");
        return;
    }

    var area = sideLength * sideLength;
    var perimeter = 4 * sideLength;

    var resultMessage = `
        <p>Luas = ${sideLength} x ${sideLength}</p>
        <p>Luas = ${sideLength * sideLength}</p>
        <p>Luas = ${area}</p>
        <br>
        <p>Keliling = 4 x ${sideLength}</p>
        <p>Keliling = ${4 * sideLength}</p>
        <p>Keliling = ${perimeter}</p>
    `;

    document.getElementById("result").innerHTML = resultMessage;
}
