import pkg from "pg";

 const {Client} = pkg;

export const client = new Client({
    host: "localhost",
    port: 5432,
    database: "integer",
    user: "postgres",
    password: "fauzul07"
})

await client.connect();
console.log("Terhubung ke Basis Data");
// const result = await client.query("SELECT * FROM mahasiswa");
// console.log(result.rows);