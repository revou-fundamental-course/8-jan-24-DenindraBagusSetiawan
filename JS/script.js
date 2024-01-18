document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    // Menampilkan rumus pada tabel saat halaman dimuat
    displayDefaultFormulas();
}

function displayDefaultFormulas() {
    // Teks rumus default
    var formulaArea = "sisi x sisi";
    var formulaPerimeter = "4 x sisi";

    // Menampilkan rumus default pada tabel
    document.getElementById("formula-area").innerText = formulaArea;
    document.getElementById("formula-perimeter").innerText = formulaPerimeter;
}

function calculate() {
    var sideLength = document.getElementById("sideLength").value;

    if (sideLength === "" || isNaN(sideLength)) {
        alert("Masukkan panjang sisi yang valid.");
        return;
    }

    var area = sideLength * sideLength;
    var perimeter = 4 * sideLength;

    // Update nilai dalam tabel dengan satuan cm
    document.getElementById("area").innerHTML = area + " cm²";
    document.getElementById("perimeter").innerHTML = perimeter + " cm";

    // Update rumus dalam tabel dengan satuan cm
    document.getElementById("formula-area").innerHTML = `${sideLength} cm x ${sideLength} cm`;
    document.getElementById("formula-perimeter").innerHTML = `4 x ${sideLength} cm`;
}

function reset() {
    document.getElementById("sideLength").value = "";

    // Reset nilai dalam tabel
    document.getElementById("area").innerText = "-";
    document.getElementById("perimeter").innerText = "-";

    // Reset rumus dalam tabel
    document.getElementById("formula-area").innerText = "sisi x sisi";
    document.getElementById("formula-perimeter").innerText = "4 x sisi";
}
