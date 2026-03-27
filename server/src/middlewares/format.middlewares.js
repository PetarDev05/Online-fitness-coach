import validator from "validator";

export const validateFormat = (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email fields are required",
      status: "error",
    });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({
      message: "Invalid email format",
      status: "error",
    });
  }

  next();
};
