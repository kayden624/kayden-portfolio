import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json({ success: false, error: "Contact service is not configured." }, { status: 503 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    const { name, email, message } = body;

    await resend.emails.send({
      from: "onboarding@resend.dev",

      to: "158aaabbbccc@gmail.com",

      subject: `Portfolio Contact From ${name}`,

      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch {
    return Response.json({
      success: false,
      error: "Unable to send message.",
    });
  }
}
