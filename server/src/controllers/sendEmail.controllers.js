import { Resend } from "resend";

export const sendEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "Petar <website@contact.fitcoach-demo.com>",
      to: ["petar.webdev05@gmail.com"],
      subject: "WEBSITE FORM TEST",
      html: `<div>
        <p>NAME: ${name}</p>
        <p>EMAIL: ${email}</p>
        <p>MESSAGE: ${message}</p>
      </div>`,
    });

    if (error) {
      return res
        .status(400)
        .json({ message: "Something went wrong. Try again later." });
    }

    res.status(200).json({ message: "Message sent! Thanks for reaching out" });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
