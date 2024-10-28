import { IConvertFile } from "../../interfaces/IConvertFile";
import { IFile } from "../../interfaces/IFile";
import { writeFileSync } from "fs";
import { PDFDocument, rgb } from "pdf-lib";

export class ConvertTxtToPdf implements IConvertFile {
  async convert(file: IFile, destionation: string): Promise<string> {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const { width, height } = page.getSize();
    page.drawText(file.getBuffer().toString(), {
      x: width,
      y: height - 50,
      size: 12,
      color: rgb(0, 0, 0),
    });
    const outputPath = `${destionation}/${Date.now()}_output.pdf`;
    const pdfBytes = await pdfDoc.save();
    writeFileSync(outputPath, pdfBytes);
    return outputPath;
  }
}
