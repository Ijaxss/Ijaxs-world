document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".btn").forEach(function (button) {
    button.addEventListener("click", function () {
      let row = this.closest(".row");
      let nama = row.querySelector(".nama").textContent;
      let jumlahInput = row.querySelector(".jumlah").value;
      let tindakan = this.classList.contains("tambah") ? "Tambah" : "Tolak";

      if (!jumlahInput || isNaN(jumlahInput)) {
        alert("Sila masukkan jumlah yang sah!");
        return;
      }

      let jumlah = parseFloat(jumlahInput);
      let totalElement = row.querySelector(".total");
      let total = parseFloat(totalElement.textContent) || 0;

      if (tindakan === "Tambah") {
        total += jumlah;
      } else {
        total -= jumlah;
      }

      totalElement.textContent = total;

      fetch("https://script.google.com/macros/s/AKfycbyOAaqhXSW7La0wMk_4_fRPd1HJiUskbGROHoSqpyPmRUtMnhL_yLZjf27zGrRHIRpoFg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama: nama,
          tindakan: tindakan,
          jumlah: jumlah,
          total: total,
        }),
      }).then(() => {
        console.log("Data dihantar ke Google Sheet");
      }).catch(error => console.error("Ralat:", error));
    });
  });
});
