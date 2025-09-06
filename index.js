import { configDotenv } from "dotenv";
configDotenv({ quiet: true });
import express from "express";

import dbInstance from "./models/index.js";
const app = express();
const port = process.env.PORT;

try {
    await dbInstance.connect();
    app.listen(port, () => {
        console.log(`Server is running at port ${port}...`);
    });
} catch (error) {
    console.log('Server stop...', error);
}