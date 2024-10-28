import { Response } from "express";
import { File } from "../../classes/File";
import { MergeFilesFactory } from "../../factorys/MergeFilesFactory";
import { DirectoryHandler } from "../../classes/utils/DirectoryHandler";

export class MergeFilesController {
  constructor(
    private readonly mergeFilesFactory: MergeFilesFactory,
    private readonly directoryHandler: DirectoryHandler
  ) {}

  async handle(req: Express.Request, res: Response): Promise<Response> {
    try {
      const files = req.files as Express.Multer.File[];
      const castedFiles = files.map((file) => {
        return new File(file.originalname, file.buffer, file.fieldname);
      });
      const extension = castedFiles[0].getExtension();
      const allMatch = castedFiles.every(
        (file) => file.getExtension() === extension
      );

      if (!allMatch) throw new Error("The files must have the same extension!");

      const destination = `uploads/merged-${extension}`;
      this.directoryHandler.createDirectoryIfNotExists(destination);
      const fileToMerge = this.mergeFilesFactory.getMergeClass(extension);
      const outputPath = await fileToMerge.mergeFiles(castedFiles, destination);
      return res.json({ message: `Merged file created at: ${outputPath}` });
    } catch (error) {
      return res.status(500).send(`Internal error: ${error}`);
    }
  }
}
