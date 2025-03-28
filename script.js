function updateAmount(nama, tindakan) {
    const jumlahInput = document.querySelector(`.amount[data-name='${nama}']`);
    const totalSpan = document.querySelector(`.total[data-name='${nama}']`);
    let jumlah = parseInt(jumlahInput.value) || 0;
    let total = parseInt(totalSpan.innerText) || 0;

    if (tindakan === "tambah") total += jumlah;
    else if (tindakan === "tolak") total -= jumlah;

    totalSpan.innerText = total;

    fetch("https://script.google.com/macros/s/AKfycbyOAaqhXSW7La0wMk_4_fRPd1HJiUskbGROHoSqpyPmRUtMnhL_yLZjf27zGrRHIRpoFg/exec ", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama, tindakan, jumlah, total })
    })
    .then(response => response.text())
    .then(console.log)
    .catch(console.error);
}
