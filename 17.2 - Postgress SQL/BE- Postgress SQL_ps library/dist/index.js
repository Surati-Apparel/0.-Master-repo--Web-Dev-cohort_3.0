"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_boe4vtV2gqdl@ep-morning-water-a8b63h75-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield pgClient.connect();
    console.log("connection successful");
}))();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //1. Extract user info
    //2. Insert it into database [CRUD] -> pg
    //3. Response to end request
    const { username, email, password } = req.body;
    const { city, country, street, pincode } = req.body;
    let SQL_QUERY, VALUES, response;
    SQL_QUERY = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`;
    VALUES = [username, email, password];
    response = yield pgClient.query(SQL_QUERY, VALUES);
    let userId = response.rows[0].id;
    SQL_QUERY = `INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5) RETURNING id`;
    VALUES = [userId, city, country, street, pincode];
    response = yield pgClient.query(SQL_QUERY, VALUES);
    res.json({
        msg: "request resolved successfully",
        response: response.rows[0].id
    });
}));
app.get("/metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query1 = `SELECT * FROM users WHERE id=$1`;
    const response = yield pgClient.query(query1, [id]);
    const query2 = `SELECT * FROM addresses WHERE id=$1`;
    const response2 = yield pgClient.query(query2, [id]);
    res.json({
        users: response.rows[0],
        addresses: response2.rows[0],
    });
}));
app.listen(3000, () => {
    console.log("backend started to listen at port: 3000");
});
