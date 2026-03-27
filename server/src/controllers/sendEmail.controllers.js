import { Resend } from "resend";
import { getEmailTemplate } from "../emails/getEmailTempalte.emails.js";

export const sendEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const html = getEmailTemplate(name, email, message);
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: `<${VERIFIED_DOMAIN}>`,
      to: [`${TARGET_ADDRESS}`],
      subject: "New Contact Form Message",
      html,
    });

    if (error) {
      return res.status(400).json({
        message: "Something went wrong. Try again later",
        status: "error",
      });
    }

    res.status(200).json({
      message: "Message sent! Thanks for reaching out",
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong. Try again later",
      status: "error",
    });
  }
};
