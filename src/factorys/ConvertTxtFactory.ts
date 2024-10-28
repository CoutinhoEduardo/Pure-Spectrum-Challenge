import { ConvertTxtToPdf } from "../classes/Convert/ConvertTxtToPdf";
import { IConvertFile } from "../interfaces/IConvertFile";

export class ConvertTxtFactory {
  getConvertClass(file_extension: string): IConvertFile {
    switch (file_extension) {
      case "pdf":
        return new ConvertTxtToPdf();
      default:
        throw Error("Not implemented extension");
    }
  }
}
