import { ConvertHtmlToPdf } from "../classes/Convert/ConvertHtmlToPdf";
import { IConvertFile } from "../interfaces/IConvertFile";

export class ConvertHtmlFactory {
  getConvertClass(file_extension: string): IConvertFile {
    switch (file_extension) {
      case "pdf":
        return new ConvertHtmlToPdf();
      default:
        throw Error("Not implemented extension");
    }
  }
}
