"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
//event handler
wss.on("connection", (socket) => {
    socket.on("message", (msg) => {
        console.log("pong");
        if (msg.toString() == "Hip") {
            socket.send("-Hop");
        }
    });
});
