import { configDotenv } from "dotenv";
configDotenv({ quiet: true });
import express from "express";

import ConnectDB from "./configs/db.js";
const app = express();
const port = process.env.PORT;

try {
    await ConnectDB.getInstance()?.connect();
    app.listen(port, () => {
        console.log(`Server is running at port ${port}...`);
    });
} catch (error) {
    console.log('Server stop...', error);
}