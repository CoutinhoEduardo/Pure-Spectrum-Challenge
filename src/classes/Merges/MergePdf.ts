import { IFile } from "../../interfaces/IFile";
import { IMergeFiles } from "../../interfaces/IMergeFiles";
import { PDFDocument } from "pdf-lib";
import fs from "fs";

export class MergePdf implements IMergeFiles {
  async mergeFiles(files: IFile[], destinationPath: string): Promise<string> {
    const pdfDocs: PDFDocument[] = [];
    const outputPath = `${destinationPath}/${Date.now()}_merged.pdf`;
    for (const file of files) {
      const pdfDoc = await PDFDocument.load(file.getBuffer());
      pdfDocs.push(pdfDoc);
    }
    const mergedPdf = await PDFDocument.create();
    for (const pdfDoc of pdfDocs) {
      const copiedPages = await mergedPdf.copyPages(
        pdfDoc,
        pdfDoc.getPageIndices()
      );
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }
    fs.writeFileSync(outputPath, await mergedPdf.save());
    return outputPath;
  }
}
