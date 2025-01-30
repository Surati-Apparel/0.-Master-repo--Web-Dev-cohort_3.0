import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({port: 8080});

interface User {
    socket: WebSocket,
    room: string
}

const allSockets: User[] = [];
wss.on("connection", (socket) => {
    socket.on("message", (msg) => {
        const parsedMsg = JSON.parse(msg.toString());
        if(parsedMsg.type === "join") {
            allSockets.push({
                socket,
                room: parsedMsg.payload.roomId
            })
        }
    })
})







