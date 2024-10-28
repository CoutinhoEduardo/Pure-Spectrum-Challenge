import express from "express";
import multer from "multer";
import { Router, Request, Response } from "express";
import { convertTxtController } from "./src/useCases/ConvertTxt";
import { mergeFilesController } from "./src/useCases/MergeFiles";
import { convertHtmlController } from "./src/useCases/ConvertHtml";
const app = express();

const route = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());

app.post("/merge-files", upload.array("files"), async (req: Request, res: Response) => {
  await mergeFilesController.handle(req, res);
});

app.post("/convert-txt/:convertTo", upload.single("file"), async (req: Request, res: Response) => {
  await convertTxtController.handle(req, res);
});

app.post("/convert-html/:convertTo", upload.single("file"), async (req: Request, res: Response) => {
  await convertHtmlController.handle(req, res);
});

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "Working !!" });
});

app.use(route);

app.listen(3000, () => {
  console.log("running...");
});
