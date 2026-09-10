import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const accessKey = process.env.ACCESS_KEY;

    if (!accessKey) {
      return NextResponse.json(
        {
          success: false,
          message: "Web3Forms is not configured.",
        },
        { status: 500 },
      );
    }

    const incomingData = await request.formData();
    const formData = new FormData();

    for (const [key, value] of incomingData.entries()) {
      if (
        key !== "access_key" &&
        key !== "subject" &&
        key !== "from_name"
      ) {
        formData.append(key, value);
      }
    }

    formData.append("access_key", accessKey);

    formData.append(
      "subject",
      "New Business Inquiry — Badar Ul Haq",
    );

    formData.append(
      "from_name",
      "Badar Ul Haq — Contact",
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      },
    );

    const result = await response.json();

    return NextResponse.json(result, {
      status: response.ok ? 200 : response.status,
    });
  } catch (error) {
    console.error(
      "Web3Forms server submission error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your inquiry. Please try again.",
      },
      { status: 500 },
    );
  }
}