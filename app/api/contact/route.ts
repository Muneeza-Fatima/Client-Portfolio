
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.API_KEY?.trim();

    console.log(
      "Resend API key loaded:",
      Boolean(resendApiKey),
    );

    if (!resendApiKey) {
      return NextResponse.json(
        {
          success: false,
          message: "API_KEY is missing on the server.",
        },
        { status: 500 },
      );
    }

    const incomingData = await request.formData();

    const name = String(
      incomingData.get("name") || "",
    ).trim();

    const email = String(
      incomingData.get("email") || "",
    ).trim();

    const company = String(
      incomingData.get("company") || "",
    ).trim();

    const message = String(
      incomingData.get("message") || "",
    ).trim();

    const country = String(
      incomingData.get("country") || "",
    ).trim();

    const countryCode = String(
      incomingData.get("country_code") || "",
    ).trim();

    const reason = String(
      incomingData.get("reason") || "",
    ).trim();

    const emailHtml = `
      <div
        style="
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #172033;
        "
      >
        <h2>New Business Inquiry — Badar Ul Haq</h2>

        <p>
          <strong>Name:</strong>
          ${name || "Not provided"}
        </p>

        <p>
          <strong>Email:</strong>
          ${email || "Not provided"}
        </p>

        <p>
          <strong>Company:</strong>
          ${company || "Not provided"}
        </p>

        <p>
          <strong>Country:</strong>
          ${country || "Not provided"}
          ${countryCode ? ` (${countryCode})` : ""}
        </p>

        <p>
          <strong>Reason:</strong>
          ${reason || "Not provided"}
        </p>

        <hr />

        <h3>Message</h3>

        <p style="white-space: pre-wrap;">
          ${message || "No message provided."}
        </p>

        <hr />

        <p style="font-size: 12px; color: #777;">
          Sent from the Badar Ul Haq portfolio contact form.
        </p>
      </div>
    `;

    const response = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from:
            "Badar Ul Haq Contact <onboarding@resend.dev>",

          // Temporary testing email
          to: ["muneezafatima567@gmail.com"],

          // Visitor's email for Reply
          reply_to: email || undefined,

          subject:
            "New Business Inquiry — Badar Ul Haq",

          html: emailHtml,
        }),
      },
    );

    const result = await response.json();

    console.log("Resend status:", response.status);
    console.log("Resend result:", result);

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message:
            result?.message ||
            "Unable to send your inquiry through Resend.",
        },
        { status: response.status },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Your inquiry has been sent successfully.",
      id: result?.id,
    });
  } catch (error) {
    console.error(
      "Resend contact error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your inquiry. Please try again.",
      },
      { status: 500 },
    );
  }
}
