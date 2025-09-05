import { Sequelize } from "sequelize";

class Database {
    static #instance;

    constructor() {
        if (Database.#instance) {
            throw new Error('Use Database.getInstance()...');
        }

        this.sequelize = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                dialect: process.env.DB_CLIENT,
                host: process.env.DB_HOST,
            }
        )

        Database.#instance = this;
    }

    async connect() {
        try {
            const con = await this.sequelize.authenticate();
            console.log('Database connected successfuly...');
        } catch (error) {
            console.log('Failed to connect database.', error.message);
            throw error;
        }
    }

    async close() {
        await this.sequelize.close();
        console.log('Database connection closed.');
    }

    getSequelize() {
        return this.sequelize;
    }

    static getInstance() {
        if (!Database.#instance) new Database();
        return Database.#instance;
    }
}

export default Database;