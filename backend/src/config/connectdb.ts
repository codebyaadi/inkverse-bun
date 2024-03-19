import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
    try {
        if (!MONGO_URI) {
            throw new Error("Missing MongoDB URI! Please set it in .env.");
        }

        await mongoose.connect(MONGO_URI, {
            w: "majority",
            autoIndex: true,
        });

        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.log("DB Connect Error: ", error);
    }
};
