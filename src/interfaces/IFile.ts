export interface IFile {
  getOriginalname(): string;
  getBuffer(): Buffer;
  getExtension(): string;
  getFieldname(): string;
}
