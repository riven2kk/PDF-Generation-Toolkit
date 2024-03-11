// pdf-generation-toolkit.js

const fs = require('fs');
const { PDFDocument, rgb } = require('pdf-lib');

class PDFGenerationToolkit {
  constructor() {
    this.document = PDFDocument.create();
    this.pages = [];
  }

  async addPage() {
    const page = this.document.addPage();
    this.pages.push(page);
    return page;
  }

  async addText(page, text, options = {}) {
    const { x = 50, y = 700, size = 12, color = rgb(0, 0, 0) } = options;
    page.drawText(text, {
      x,
      y,
      size,
      color,
    });
  }

  async save(filename) {
    const pdfBytes = await this.document.save();
    fs.writeFileSync(filename, pdfBytes);
  }
}

module.exports = PDFGenerationToolkit;
