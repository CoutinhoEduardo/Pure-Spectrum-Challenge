import { IFile } from "../interfaces/IFile";

export class File implements IFile {
  constructor(
    private readonly originalname: string,
    private readonly buffer: Buffer,
    private readonly fieldname: string
  ) {
    const extension = this.getExtension();
    if (!File.supportedExtensions.includes(extension)) {
      throw new Error(`Unsupported file extension: ${extension}`);
    }
  }

  private static readonly supportedExtensions: string[] = [
    "html",
    "pdf",
    "txt",
  ];

  public getOriginalname(): string {
    return this.originalname;
  }

  public getBuffer(): Buffer {
    return this.buffer;
  }

  public getExtension(): string {
    return this.originalname.split(".").pop()!;
  }

  public getFieldname() {
    return this.fieldname;
  }
}
