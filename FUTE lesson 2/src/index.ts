import { CustomServer } from "./Libraries";

let htmlFiles = [
    new CustomServer.ServerFS.ServerHTMLFile("utf-8", "index.html", "C:\\Users\\Ivan\\Desktop\\FUTE\\FUTE lesson 2\\src\\index.html")
] 

let server = new CustomServer.Server(8888, htmlFiles);
server.run()
