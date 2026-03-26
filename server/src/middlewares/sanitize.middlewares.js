import { sanitizeString } from "../utils/sanitize.utils.js";
import validator from "validator";

export const sanitizeContact = (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    req.body.name = sanitizeString(name);
    req.body.email = validator.normalizeEmail(email);
    req.body.message = sanitizeString(message);

    next();
  } catch (error) {
    res.status(400).json({
      message: "Data format is invalid",
      status: "error",
    });
  }
};
