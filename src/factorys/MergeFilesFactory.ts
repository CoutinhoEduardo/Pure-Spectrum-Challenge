import { MergePdf } from "../classes/Merges/MergePdf";
import { IMergeFiles } from "../interfaces/IMergeFiles";

export class MergeFilesFactory {
  getMergeClass(file_extension: string): IMergeFiles {
    switch (file_extension) {
      case "pdf":
        return new MergePdf();
      default:
        throw Error("Not implemented extension");
    }
  }
}
