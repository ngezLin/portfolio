import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL; // Add this in your env (e.g. vincentiusf17@gmail.com)

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log("Contact form submitted:", { email, subject, message });

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: subject || "New message from portfolio",
      react: (
        <>
          <h1>New Message from Portfolio</h1>
          <p><strong>From:</strong> {email}</p>
          <p><strong>Subject:</strong> {subject}</p>
          <p><strong>Message:</strong></p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
