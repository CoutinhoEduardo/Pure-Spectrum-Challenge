import { IFile } from "./IFile";

export interface IMergeFiles {
  mergeFiles(files: IFile[], destinationPath: string): Promise<string>;
}
