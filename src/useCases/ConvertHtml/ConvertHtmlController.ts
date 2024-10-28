import { Request, Response } from "express";
import { ConvertHtmlFactory } from "../../factorys/ConvertHtmlFactory";
import { File } from "../../classes/File";
import { DirectoryHandler } from "../../classes/utils/DirectoryHandler";

export class ConvertHtmlController {
  constructor(
    private readonly convertHtmlFactory: ConvertHtmlFactory,
    private readonly directoryHandler: DirectoryHandler
  ) {}
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const file = req.file as Express.Multer.File;
      const convertTo = req.params.convertTo;
      const destination = `uploads/html-to${convertTo}`;
      const castedFile = new File(
        file.originalname,
        file.buffer,
        file.fieldname
      );
      this.directoryHandler.createDirectoryIfNotExists(destination);
      const convertClass = this.convertHtmlFactory.getConvertClass(convertTo);
      const outputPath = await convertClass.convert(castedFile, destination);
      return res.json({ message: `File created at: ${outputPath}` });
    } catch (error) {
      return res.status(500).send(`Internal Error: ${error}`);
    }
  }
}
