import { NextResponse } from "next/server";
import { sendContactEmail, ContactData } from "@/lib/mail";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, practiceArea, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields. Please provide your name, email, phone, and message." },
        { status: 400 }
      );
    }

    const contactData: ContactData = {
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      practiceArea: practiceArea ? String(practiceArea).trim() : undefined,
      message: String(message).trim(),
    };

    const result = await sendContactEmail(contactData);

    return NextResponse.json({
      success: true,
      message: "Consultation request sent successfully.",
      simulated: result.simulated,
    });
  } catch (error: any) {
    console.error("Error processing contact request:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send consultation request. Please try again or call us." },
      { status: 500 }
    );
  }
}
