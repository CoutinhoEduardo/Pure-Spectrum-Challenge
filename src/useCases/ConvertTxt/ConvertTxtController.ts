import { Request, Response } from "express";
import { ConvertTxtFactory } from "../../factorys/ConvertTxtFactory";
import { File } from "../../classes/File";
import { IConvertFile } from "../../interfaces/IConvertFile";
import { DirectoryHandler } from "../../classes/utils/DirectoryHandler";

export class ConvertTxtController {
  constructor(
    private readonly convertTxtFactory: ConvertTxtFactory,
    private readonly directoryHandler: DirectoryHandler
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const file = req.file as Express.Multer.File;
      const convertTo = req.params.convertTo;
      const destination = `uploads/txt-to-${convertTo}`;
      const castedFile = new File(
        file.originalname,
        file.buffer,
        file.fieldname
      );

      this.directoryHandler.createDirectoryIfNotExists(destination);

      const convertClass: IConvertFile =
        this.convertTxtFactory.getConvertClass(convertTo);
      const outputPath = await convertClass.convert(castedFile, destination);
      return res.json({ message: `File created at: ${outputPath}` });
    } catch (error) {
      return res.status(500).send(`Internal error: ${error}`);
    }
  }
}
