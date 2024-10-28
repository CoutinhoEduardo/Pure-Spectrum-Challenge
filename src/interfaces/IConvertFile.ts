import { IFile } from "./IFile";
export interface IConvertFile {
  convert(file: IFile, destionation: string): Promise<string>;
}
