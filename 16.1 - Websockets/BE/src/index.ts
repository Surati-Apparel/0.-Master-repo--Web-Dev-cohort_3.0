import { WebSocketServer } from "ws";
const wss = new WebSocketServer({port: 8080});


//event handler
wss.on("connection", (socket) => {
    socket.on("message", (msg) => {
        console.log("pong");
        if(msg.toString() == "Hip") {
            socket.send("-Hop");
        }
    })
})