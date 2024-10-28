import { ConvertHtmlFactory } from "../../factorys/ConvertHtmlFactory";
import { ConvertHtmlController } from "./ConvertHtmlController";
import { DirectoryHandler } from "../../classes/utils/DirectoryHandler";

const conventHtmlFactory = new ConvertHtmlFactory();
const directoryHandler = new DirectoryHandler();
const convertHtmlController = new ConvertHtmlController(conventHtmlFactory, directoryHandler);

export { convertHtmlController };
