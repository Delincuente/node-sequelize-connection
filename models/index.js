import { DataTypes } from "sequelize";
import Database from "../configs/db.js";
import userModel from "./User.js";
const dbInstance = Database.getInstance();
export const sequelize = dbInstance.getSequelize();
const User = userModel(sequelize, DataTypes);
export default dbInstance;