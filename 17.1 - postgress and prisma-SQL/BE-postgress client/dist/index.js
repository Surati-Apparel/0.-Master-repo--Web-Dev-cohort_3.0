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
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pgClient = new pg_1.Client("postgresql://neondb_owner:npg_boe4vtV2gqdl@ep-morning-water-a8b63h75-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield pgClient.connect();
    const response = yield pgClient.query("UPDATE users SET password = 'new33_password' WHERE email = 'user@example.com'");
    console.log(response.rows);
}))();
