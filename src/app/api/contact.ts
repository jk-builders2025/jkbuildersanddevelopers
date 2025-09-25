import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // 1️⃣ Send auto-reply to user
    await sgMail.send({
      to: email,
      from: "syedsameernazeer@gmail.com", // must be verified in SendGrid
      subject: `Hi ${name}, Thank You for Contacting JK Builders & Developers!`,
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for contacting <strong>JK Builders & Developers</strong>. We truly appreciate your interest in our services.</p>
        <p>We specialize in complete A–Z building solutions, focusing on quality craftsmanship and attention to detail. Explore our portfolio here: <a href="https://yourwebsite.com/projects" target="_blank">View Projects</a>.</p>
        <p><strong>Next steps:</strong> schedule a call, book a site visit, or reply to this email with your project details.</p>
        <p>Best regards,<br>
        JK Builders & Developers<br>
        Phone: +91 98765 43210<br>
        Email: info@jkbuilders.com<br>
        Website: <a href="https://yourwebsite.com" target="_blank">Visit Website</a>
        </p>
      `,
    });

    // 2️⃣ Send notification to admin
    await sgMail.send({
      to: "info@jkbuilders.com",
      from: "info@jkbuilders.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
}
