import express from "express";
import helmet from "helmet";
import cors from "cors";
import emailRouter from "./src/routes/email.routes.js";

export const app = express();

app.use(helmet());
app.use(
  cors({
    methods: ["GET", "POST", "PATCH", "DELETE"],
    origin: "*",
    allowedHeaders: ["Content-type", "Authorization"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use((req, res, next) => {
  console.log(`REQUEST METHOD: ${req.method}\nREQUEST PATH: ${req.path}`);
  next();
});

app.use("/email", emailRouter);
