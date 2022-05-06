import mongoose from "mongoose";
import { config } from "../config/Constants"
export class MongoConnection {
    public async connect(): Promise<void> {
        try {

            await mongoose.connect(config.CONN)
            console.log("Database Connected")
        } catch (error) {
            console.error(error.message)
            process.exit(1)
        }
    }
}