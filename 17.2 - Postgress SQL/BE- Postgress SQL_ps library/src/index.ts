import express from 'express';
import { Client } from 'pg';
const pgClient = new Client("postgresql://neondb_owner:npg_boe4vtV2gqdl@ep-morning-water-a8b63h75-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");
(async ()=>{
    await pgClient.connect();
    console.log("connection successful");
})();


const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
    //1. Extract user info
    //2. Insert it into database [CRUD] -> pg
    //3. Response to end request

    const { username, email, password } = req.body;
    const { city, country, street, pincode } = req.body;
    let SQL_QUERY, VALUES, response;

    SQL_QUERY = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`;
    VALUES = [username, email, password];
    response = await pgClient.query(SQL_QUERY, VALUES);

    let userId = response.rows[0].id;
    SQL_QUERY = `INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5) RETURNING id`;
    VALUES = [ userId, city, country, street, pincode ];
    response = await pgClient.query(SQL_QUERY, VALUES);

    res.json({
        msg: "request resolved successfully",
        response: response.rows[0].id
    })
})

app.get("/metadata", async (req, res) => {
    const id = req.query.id;

    const query1 = `SELECT * FROM users WHERE id=$1`
    const response = await pgClient.query(query1, [id]);

    const query2 = `SELECT * FROM addresses WHERE user_id=$1`
    const response2 = await pgClient.query(query2, [id]);

    res.json({
        users: response.rows[0],
        addresses: response2.rows
    })
})

app.listen(3000, ()=> {
    console.log("backend started to listen at port: 3000");
})