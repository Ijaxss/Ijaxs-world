function kiraJumlah() {
    let anak1 = parseFloat(document.getElementById("anak1").value) || 0;
    let anak2 = parseFloat(document.getElementById("anak2").value) || 0;
    let anak3 = parseFloat(document.getElementById("anak3").value) || 0;
    let anak4 = parseFloat(document.getElementById("anak4").value) || 0;

    let jumlahKeseluruhan = anak1 + anak2 + anak3 + anak4;

    document.getElementById("totalAnak1").innerText = "RM " + anak1.toFixed(2);
    document.getElementById("totalAnak2").innerText = "RM " + anak2.toFixed(2);
    document.getElementById("totalAnak3").innerText = "RM " + anak3.toFixed(2);
    document.getElementById("totalAnak4").innerText = "RM " + anak4.toFixed(2);
    document.getElementById("jumlahKeseluruhan").innerText = "RM " + jumlahKeseluruhan.toFixed(2);
}
