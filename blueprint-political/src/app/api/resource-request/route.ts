import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resourceLabels: Record<string, string> = {
  checklist: "First-Time Candidate Readiness Checklist",
  finance_guide: "Arkansas Campaign Finance Guide",
  scripts: "Call Time Script Starter Pack",
};

export async function POST(req: NextRequest) {
  const { email, resource } = await req.json();

  if (!email || !resource) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const label = resourceLabels[resource] ?? resource;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Blueprint Political <onboarding@resend.dev>",
    to: "carolyvella@gmail.com",
    subject: `New resource request: ${label}`,
    text: `Someone requested "${label}" from Blueprint Political.\n\nSubmitter email: ${email}\n\nNo action required — this is a notification only. PDFs are not yet auto-sent.`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
