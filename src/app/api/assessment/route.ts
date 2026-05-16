import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, this would integrate with an Email CRM / Webhook (e.g., Mailchimp, ActiveCampaign, Zapier)
    console.log("Assessment Submitted:", body);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json({ success: true, message: "Assessment received successfully" });
  } catch (error) {
    console.error("Assessment Error:", error);
    return NextResponse.json({ success: false, message: "Failed to submit assessment" }, { status: 500 });
  }
}
