import { DataTypes } from "sequelize";
import Database from "../configs/db.js";
const dbInstance = Database.getInstance();
export const sequelize = dbInstance.getSequelize();
export default dbInstance;