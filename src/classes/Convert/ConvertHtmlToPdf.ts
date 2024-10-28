import { IConvertFile } from "../../interfaces/IConvertFile";
import { IFile } from "../../interfaces/IFile";
import pdf, { CreateOptions } from "html-pdf";
export class ConvertHtmlToPdf implements IConvertFile {
  async convert(file: IFile, destionation: string): Promise<string> {
    const outputPath = `${destionation}/${Date.now()}_html-to-pdf.pdf`;
    const html = file.getBuffer().toString();
    const options: CreateOptions = {
      type: "pdf",
      format: "A4",
      orientation: "portrait",
    };
    pdf.create(html, options).toFile(outputPath, (error, response) => {
      if (error) return error;
      console.log(response);
    });
    return outputPath;
  }
}
