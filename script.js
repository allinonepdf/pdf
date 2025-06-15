function convertPDFtoExcel() {
  const file = document.getElementById('pdfToExcelInput').files[0];
  if (!file) return alert("Please select a PDF file.");
  alert("Mock: PDF to Excel conversion started (implement backend or API here).");
}

function convertImagesToExcel() {
  const files = document.getElementById('imageToExcelInput').files;
  if (!files.length) return alert("Please select at least one image.");
  alert("Mock: Images to Excel conversion started (implement backend or OCR API here).");
}
