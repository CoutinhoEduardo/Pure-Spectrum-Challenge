import fs from "fs";

export class DirectoryHandler {
  public createDirectoryAt(path: string) {
    fs.mkdirSync(path);
  }

  public directoryExists(path: string): boolean {
    return fs.existsSync(path);
  }

  public createDirectoryIfNotExists(path: string) {
    if (this.directoryExists(path)) {
      return path;
    }
    return this.createDirectoryAt(path);
  }
}
