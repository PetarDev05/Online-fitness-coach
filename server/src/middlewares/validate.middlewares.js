import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.email(),
  message: z.string().max(1000),
});

export const validateContact = (req, res, next) => {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    return res
      .status(400)
      .json({ message: "Data format is invalid", status: "error" });
  }

  req.body = result.data;
  next();
};
