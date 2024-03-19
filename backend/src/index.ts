import express from "express";
import type { Express, Request, Response } from "express";
import cors from "cors";
import { connectDB } from "@/config/connectdb";

const app: Express = express();
const PORT = process.env.DEFAULT_PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Inkverse API",
        version: "1.0.0",
        author: "@codebyaadi"
    });
});

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
};

startServer();