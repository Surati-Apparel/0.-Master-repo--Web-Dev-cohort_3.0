import { Client } from "pg";
const pgClient = new Client("postgresql://neondb_owner:npg_boe4vtV2gqdl@ep-morning-water-a8b63h75-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");


(async () => {
    await pgClient.connect();
    const response = await pgClient.query("UPDATE users SET password = 'new33_password' WHERE email = 'user@example.com'");
    console.log(response.rows);
})();

