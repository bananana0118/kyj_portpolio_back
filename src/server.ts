import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import testRoutes from "./routes/testRoutes";

const app: Application = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI||"";
mongoose
    .connect(MONGODB_URI, {})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
// 사용자 라우터 설정
app.use("/api", testRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
