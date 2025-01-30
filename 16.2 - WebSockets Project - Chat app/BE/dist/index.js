"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const allsocket = [];
let userCounter = 0;
wss.on("connection", (socket) => {
    allsocket.push(socket);
    console.log("user connected #" + userCounter);
    userCounter++;
    socket.on("message", (msg) => {
        console.log("msg received " + msg.toString());
        setTimeout(() => {
            allsocket.forEach((s, index) => {
                if (s !== socket)
                    s.send(`User${index}: ${msg.toString()}`);
            });
        }, 1500);
    });
});
