import express from "express";

import dbInstance from "./models/index.js";
const app = express();
const port = process.env.PORT || 3000;

try {
    await dbInstance.connect();
    // await dbInstance.syncDatabase();
    app.listen(port, () => {
        console.log(`Server is running at port ${port}...`);
    });
} catch (error) {
    console.log('Server stop...', error);
}