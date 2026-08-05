import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, organisation, contact, requirement } = await request.json();

    if (!name || !contact || !requirement) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "The enquiry form isn't fully set up yet. Please contact us directly by phone or email." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

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
