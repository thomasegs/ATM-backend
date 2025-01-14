import { server } from "./server/Server";

server.listen(process.env.PORT, ()=> console.log(`Server on em http://localhost:${process.env.PORT}`));