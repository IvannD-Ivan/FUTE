import express, {Request, Response} from "express";
import { readFileSync } from "fs";

export namespace CustomServer {
    export namespace ServerFS {
        export type fileEncogings = BufferEncoding;

        export class ServerHTMLFile {
            private fileEncoding: fileEncogings = "utf-8";
            private fileName: string;
            private fullFilePath: string;

            constructor (fileEncoding: fileEncogings, fileName: string, fullFilePath: string) {
                this.fileEncoding = fileEncoding;
                this.fileName = fileName;
                this.fullFilePath = fullFilePath;
            }

            getSource(): string {
                let result = readFileSync(this.fullFilePath);

                return result.toString(this.fileEncoding);
            }
            
            get getFileEncoding(): fileEncogings {
                return this.fileEncoding;
            }

            get getFileName(): string {
                return this.fileName;
            }

            get getFullFilePath(): string {
                return this.fullFilePath;
            }
        }
    }

    export class Server {
        private readonly app = express();
        private port: number = 8888 || process.env.PORT;
        private HTMLFiles: Array<ServerFS.ServerHTMLFile> = [];

        constructor (port: number | undefined, HTMLFiles: Array<ServerFS.ServerHTMLFile>) {
            if (typeof port == "number") {
                this.port = port;
            }
            
            this.HTMLFiles = HTMLFiles;
        }

        run() {
            for (let i = 0; i < this.HTMLFiles.length; i++) {   
                this.app.get(`/${this.HTMLFiles[i].getFileName}`, (req: Request, res: Response) => {
                    res.send(this.HTMLFiles[i].getSource());
                });

                this.app.listen(this.port, () => {
                    console.log(`We're running at port ${this.port}, url is http://localhost:${this.port}/${this.HTMLFiles[i].getFileName}`);
                });
            }
        }
    }
}
