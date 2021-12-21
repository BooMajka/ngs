import { createServer } from "http";

const server = createServer((req, res) => {
  res.end("Hello Node");
});
                            
server.listen(4242, () => {
console.log("server is running");
 }0:

