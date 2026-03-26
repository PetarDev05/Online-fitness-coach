import express from "express";
import helmet from "helmet";
import cors from "cors";
import emailRouter from "./src/routes/email.routes.js";
import { contactLimiter } from "./src/middlewares/rateLimit.middlewares.js";
import { validateContact } from "./src/middlewares/validate.middlewares.js";
import { sanitizeContact } from "./src/middlewares/sanitize.middlewares.js";

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
app.use(contactLimiter);
app.use(validateContact);
app.use(sanitizeContact);
app.use((req, res, next) => {
  console.log(`REQUEST METHOD: ${req.method}\nREQUEST PATH: ${req.path}`);
  next();
});

app.use("/email", emailRouter);
