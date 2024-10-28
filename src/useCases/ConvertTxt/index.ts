import { ConvertTxtFactory } from "../../factorys/ConvertTxtFactory";
import { ConvertTxtController } from "./ConvertTxtController";
import { DirectoryHandler } from "../../classes/utils/DirectoryHandler";

const factory = new ConvertTxtFactory();
const directoryHandler = new DirectoryHandler();
const convertTxtController = new ConvertTxtController(factory, directoryHandler);

export { convertTxtController };
