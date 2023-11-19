import express, {Request, Response} from "express";
import { readFileSync } from "fs";

const app = express();
const port = 8888 || process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    let content = readFileSync("./src/index.html").toString("utf-8");
    res.send(content);
});

app.listen(port, () => {
    console.log(`We're running at port ${port}, url is http://localhost:${port}`)
});
