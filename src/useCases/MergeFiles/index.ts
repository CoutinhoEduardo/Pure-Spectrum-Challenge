import { MergeFilesFactory } from "../../factorys/MergeFilesFactory";
import { MergeFilesController } from "./MergeFilesController";
import { DirectoryHandler } from "../../classes/utils/DirectoryHandler";

const directoryHandler = new DirectoryHandler();
const mergeFilesFactory = new MergeFilesFactory();
const mergeFilesController = new MergeFilesController(
  mergeFilesFactory,
  directoryHandler
);

export { mergeFilesController };
