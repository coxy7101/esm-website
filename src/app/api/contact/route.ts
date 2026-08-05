import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, organisation, contact, requirement } = await request.json();

    if (!name || !contact || !requirement) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Essential Safety Management <enquiries@essentialsafetymanagement.com>",
      to: "info@essentialsafetymanagement.com",
      replyTo: contact.includes("@") ? contact : undefined,
      subject: `New enquiry from ${name}${organisation ? ` (${organisation})` : ""}`,
      text: `Name: ${name}\nOrganisation: ${organisation || "Not provided"}\nEmail/Phone: ${contact}\n\nRequirement:\n${requirement}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your enquiry. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
