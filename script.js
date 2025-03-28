function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RekodDuitRaya");
  var data = JSON.parse(e.postData.contents);

  // Simpan data ke Google Sheet
  sheet.appendRow([new Date(), data.nama, data.tindakan, data.jumlah, data.total]);

  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
