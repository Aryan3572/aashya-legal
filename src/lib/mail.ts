import nodemailer from "nodemailer";

const emailUser = process.env.EMAIL_USER || "aashyalegal@gmail.com";
const emailPass = process.env.EMAIL_PASS || "";
const emailTo = process.env.EMAIL_TO || emailUser;

export function getTransporter() {
  if (!emailPass) {
    console.warn("EMAIL_PASS environment variable is not configured. Real emails will not be sent until configured in .env.local.");
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass.replace(/\s+/g, ""), // clean up any spaces in 16-char app password
    },
  });
}

export interface CareerApplicationData {
  roleType: "associate" | "internship";
  fullName: string;
  email: string;
  phone: string;
  education: string;
  practiceArea: string;
  resumeLink: string;
  coverNote?: string;
}

export async function sendCareerApplicationEmail(data: CareerApplicationData) {
  const transporter = getTransporter();
  const roleTitle = data.roleType === "associate" ? "Associate / Lateral Hire" : "Internship Programme";

  // If email credentials aren't configured yet, log in development and return simulated success
  if (!transporter) {
    console.log("[DEV MODE] Career Application received (email not sent - configure EMAIL_PASS in .env.local):", data);
    return { success: true, simulated: true };
  }

  // 1. Send notification to the Firm (aashyalegal@gmail.com)
  const firmMailOptions = {
    from: `"Aashya Legal Recruitment" <${emailUser}>`,
    to: emailTo,
    replyTo: data.email,
    subject: `New Application: ${data.fullName} - ${roleTitle}`,
    html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e5e5; padding: 30px;">
        <div style="border-bottom: 2px solid #b89c72; padding-bottom: 15px; margin-bottom: 25px;">
          <h2 style="color: #101c29; margin: 0; font-size: 22px;">New Career Application</h2>
          <p style="color: #b89c72; margin: 5px 0 0 0; font-size: 14px; font-weight: bold; text-transform: uppercase;">Aashya Legal Recruitment Portal</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666; font-size: 14px; width: 35%;"><strong>Position:</strong></td>
            <td style="padding: 10px 0; color: #101c29; font-size: 14px; font-weight: 600;">${roleTitle}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666; font-size: 14px;"><strong>Candidate Name:</strong></td>
            <td style="padding: 10px 0; color: #101c29; font-size: 14px;">${data.fullName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666; font-size: 14px;"><strong>Email:</strong></td>
            <td style="padding: 10px 0; color: #101c29; font-size: 14px;"><a href="mailto:${data.email}" style="color: #b89c72; text-decoration: none;">${data.email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666; font-size: 14px;"><strong>Phone:</strong></td>
            <td style="padding: 10px 0; color: #101c29; font-size: 14px;"><a href="tel:${data.phone}" style="color: #101c29; text-decoration: none;">${data.phone}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666; font-size: 14px;"><strong>Credentials / Law School:</strong></td>
            <td style="padding: 10px 0; color: #101c29; font-size: 14px;">${data.education}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666; font-size: 14px;"><strong>Area of Interest:</strong></td>
            <td style="padding: 10px 0; color: #101c29; font-size: 14px;">${data.practiceArea}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666; font-size: 14px;"><strong>Resume Link:</strong></td>
            <td style="padding: 10px 0; color: #101c29; font-size: 14px;">
              <a href="${data.resumeLink}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background-color: #101c29; color: #faf8f5; padding: 8px 16px; text-decoration: none; font-size: 12px; font-weight: bold; border-radius: 2px;">
                View Resume / Portfolio &rarr;
              </a>
            </td>
          </tr>
        </table>

        ${data.coverNote ? `
          <div style="background-color: #faf8f5; border-left: 3px solid #b89c72; padding: 15px; margin-bottom: 25px;">
            <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: bold; color: #101c29;">Cover Note / Statement:</p>
            <p style="margin: 0; color: #444; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.coverNote}</p>
          </div>
        ` : ""}

        <p style="color: #888; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px;">
          You can reply directly to this email to contact ${data.fullName}.
        </p>
      </div>
    `,
  };

  // 2. Send automated acknowledgment receipt to the candidate
  const applicantMailOptions = {
    from: `"Aashya Legal" <${emailUser}>`,
    to: data.email,
    subject: `Application Received: ${roleTitle} - Aashya Legal`,
    html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e5e5; padding: 35px;">
        <div style="border-bottom: 2px solid #b89c72; padding-bottom: 20px; margin-bottom: 25px;">
          <h1 style="color: #101c29; margin: 0; font-size: 24px; letter-spacing: 0.5px;">AASHYA LEGAL</h1>
          <p style="color: #b89c72; margin: 4px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Advocates & Consultants</p>
        </div>

        <p style="font-size: 16px; color: #101c29; margin-bottom: 20px;">Dear ${data.fullName},</p>

        <p style="font-size: 14px; color: #444; line-height: 1.7; margin-bottom: 16px;">
          Thank you for your interest in joining <strong>Aashya Legal</strong>. We have received your application for the <strong>${roleTitle}</strong> position.
        </p>

        <p style="font-size: 14px; color: #444; line-height: 1.7; margin-bottom: 20px;">
          Our recruitment committee reviews candidate profiles on a rolling basis. If your background aligns with our current requirements, a member of our team will get in touch with you for the next steps.
        </p>

        <div style="background-color: #faf8f5; border: 1px solid #ebe7e0; padding: 18px; margin: 25px 0;">
          <h4 style="margin: 0 0 10px 0; color: #101c29; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Application Summary</h4>
          <p style="margin: 4px 0; font-size: 13px; color: #666;"><strong>Position:</strong> ${roleTitle}</p>
          <p style="margin: 4px 0; font-size: 13px; color: #666;"><strong>Practice Area:</strong> ${data.practiceArea}</p>
          <p style="margin: 4px 0; font-size: 13px; color: #666;"><strong>Submission Date:</strong> ${new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>

        <p style="font-size: 14px; color: #444; line-height: 1.7; margin-bottom: 25px;">
          For any urgent updates regarding your application, you may reply to this email or reach us at <a href="mailto:aashyalegal@gmail.com" style="color: #b89c72; text-decoration: none;">aashyalegal@gmail.com</a>.
        </p>

        <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; font-size: 12px; color: #777;">
          <p style="margin: 0 0 4px 0; font-weight: bold; color: #101c29;">Aashya Legal</p>
          <p style="margin: 0 0 4px 0;">Panchratan, Annapoorna Chowk, Nagra Toli, Ranchi, Jharkhand - 834001</p>
          <p style="margin: 0;">Phone: +91 9739456288 | <a href="https://aashyalegal.com" style="color: #b89c72; text-decoration: none;">www.aashyalegal.com</a></p>
        </div>
      </div>
    `,
  };

  // Send both emails concurrently
  await Promise.all([
    transporter.sendMail(firmMailOptions),
    transporter.sendMail(applicantMailOptions),
  ]);

  return { success: true, simulated: false };
}

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  practiceArea?: string;
  message: string;
}

export async function sendContactEmail(data: ContactData) {
  const transporter = getTransporter();

  if (!transporter) {
    console.log("[DEV MODE] Contact Enquiry received (email not sent - configure EMAIL_PASS in .env.local):", data);
    return { success: true, simulated: true };
  }

  // 1. Send notification to firm
  const firmMailOptions = {
    from: `"Aashya Legal Website" <${emailUser}>`,
    to: emailTo,
    replyTo: data.email,
    subject: `New Consultation Enquiry: ${data.name}`,
    html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e5e5; padding: 30px;">
        <div style="border-bottom: 2px solid #b89c72; padding-bottom: 15px; margin-bottom: 25px;">
          <h2 style="color: #101c29; margin: 0; font-size: 22px;">New Consultation Request</h2>
          <p style="color: #b89c72; margin: 5px 0 0 0; font-size: 14px; font-weight: bold; text-transform: uppercase;">Aashya Legal Contact Portal</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666; font-size: 14px; width: 35%;"><strong>Client Name:</strong></td>
            <td style="padding: 10px 0; color: #101c29; font-size: 14px; font-weight: 600;">${data.name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666; font-size: 14px;"><strong>Email:</strong></td>
            <td style="padding: 10px 0; color: #101c29; font-size: 14px;"><a href="mailto:${data.email}" style="color: #b89c72; text-decoration: none;">${data.email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f0f0f0;">
            <td style="padding: 10px 0; color: #666; font-size: 14px;"><strong>Phone:</strong></td>
            <td style="padding: 10px 0; color: #101c29; font-size: 14px;"><a href="tel:${data.phone}" style="color: #101c29; text-decoration: none;">${data.phone}</a></td>
          </tr>
          ${data.practiceArea ? `
            <tr style="border-bottom: 1px solid #f0f0f0;">
              <td style="padding: 10px 0; color: #666; font-size: 14px;"><strong>Practice Area:</strong></td>
              <td style="padding: 10px 0; color: #101c29; font-size: 14px;">${data.practiceArea}</td>
            </tr>
          ` : ""}
        </table>

        <div style="background-color: #faf8f5; border-left: 3px solid #b89c72; padding: 15px; margin-bottom: 25px;">
          <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: bold; color: #101c29;">Message / Enquiry Details:</p>
          <p style="margin: 0; color: #444; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>

        <p style="color: #888; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px;">
          Reply directly to this email to respond to ${data.name}.
        </p>
      </div>
    `,
  };

  // 2. Send acknowledgment to client
  const clientMailOptions = {
    from: `"Aashya Legal" <${emailUser}>`,
    to: data.email,
    subject: `Enquiry Received - Aashya Legal`,
    html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e5e5; padding: 35px;">
        <div style="border-bottom: 2px solid #b89c72; padding-bottom: 20px; margin-bottom: 25px;">
          <h1 style="color: #101c29; margin: 0; font-size: 24px; letter-spacing: 0.5px;">AASHYA LEGAL</h1>
          <p style="color: #b89c72; margin: 4px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Advocates & Consultants</p>
        </div>

        <p style="font-size: 16px; color: #101c29; margin-bottom: 20px;">Dear ${data.name},</p>

        <p style="font-size: 14px; color: #444; line-height: 1.7; margin-bottom: 16px;">
          Thank you for contacting <strong>Aashya Legal</strong>. We have received your consultation enquiry.
        </p>

        <p style="font-size: 14px; color: #444; line-height: 1.7; margin-bottom: 20px;">
          An advocate from our practice will review your message and contact you promptly via email or phone to discuss your matter.
        </p>

        <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; font-size: 12px; color: #777;">
          <p style="margin: 0 0 4px 0; font-weight: bold; color: #101c29;">Aashya Legal</p>
          <p style="margin: 0 0 4px 0;">Panchratan, Annapoorna Chowk, Nagra Toli, Ranchi, Jharkhand - 834001</p>
          <p style="margin: 0;">Phone: +91 9739456288 | <a href="https://aashyalegal.com" style="color: #b89c72; text-decoration: none;">www.aashyalegal.com</a></p>
        </div>
      </div>
    `,
  };

  await Promise.all([
    transporter.sendMail(firmMailOptions),
    transporter.sendMail(clientMailOptions),
  ]);

  return { success: true, simulated: false };
}
