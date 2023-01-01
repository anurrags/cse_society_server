import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connection from "./db.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import eventRoutes from "./routes/event.js";
import blogRoutes from "./routes/blogs.js";
import memberRoutes from "./routes/memberRoute.js";
// database connection
const app = express();
dotenv.config();
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/team", memberRoutes);
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
