import { NextResponse } from "next/server";
import { sendCareerApplicationEmail, CareerApplicationData } from "@/lib/mail";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { roleType, fullName, email, phone, education, practiceArea, resumeLink, coverNote } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !education || !practiceArea || !resumeLink) {
      return NextResponse.json(
        { error: "Missing required fields. Please fill all marked fields." },
        { status: 400 }
      );
    }

    const applicationData: CareerApplicationData = {
      roleType: roleType === "internship" ? "internship" : "associate",
      fullName: String(fullName).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      education: String(education).trim(),
      practiceArea: String(practiceArea).trim(),
      resumeLink: String(resumeLink).trim(),
      coverNote: coverNote ? String(coverNote).trim() : undefined,
    };

    const result = await sendCareerApplicationEmail(applicationData);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
      simulated: result.simulated,
    });
  } catch (error: any) {
    console.error("Error processing career application:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to process application. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
