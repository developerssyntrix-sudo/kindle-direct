import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function row(label: string, value: string | undefined) {
  if (!value?.trim()) return "";
  return `<tr>
    <td style="padding:8px 12px;border:1px solid #d5d9d9;font-weight:600;background:#f0f2f2;width:120px;white-space:nowrap">${label}</td>
    <td style="padding:8px 12px;border:1px solid #d5d9d9;color:#131a22">${value}</td>
  </tr>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message, source, budget } = body as Record<string, string>;

    if (!email?.trim()) {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    }

    const adminTo = process.env.CONTACT_EMAIL!;
    const from = `"Kindle Direct Publishing House" <${process.env.SMTP_USER}>`;
    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // ── Notification to admin ──────────────────────────────────────────
    await transporter.sendMail({
      from,
      to: adminTo,
      replyTo: email,
      subject: `New Inquiry from ${name || email}${service ? ` — ${service}` : ""}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#222E3E;padding:20px 28px;border-radius:6px 6px 0 0">
            <h2 style="color:#FF9900;margin:0;font-size:18px">New Contact Form Submission</h2>
            <p style="color:#ffffff80;margin:4px 0 0;font-size:12px">Kindle Direct Publishing House Website</p>
          </div>
          <div style="border:1px solid #d5d9d9;border-top:none;padding:24px 28px;background:#fff;border-radius:0 0 6px 6px">
            <table style="border-collapse:collapse;width:100%;font-size:14px">
              ${row("Name", name)}
              ${row("Email", `<a href="mailto:${email}" style="color:#008296">${email}</a>`)}
              ${row("Phone", phone)}
              ${row("Service", service)}
              ${row("Budget", budget)}
              ${row("Source", source)}
              ${row("Message", `<span style="white-space:pre-wrap">${message}</span>`)}
            </table>
            <p style="color:#9ca3af;font-size:11px;margin:20px 0 0;border-top:1px solid #e5e7eb;padding-top:12px">
              Submitted at ${submittedAt} EST
            </p>
          </div>
        </div>
      `,
    });

    // ── Auto-reply to user ─────────────────────────────────────────────
    await transporter.sendMail({
      from,
      to: email,
      subject: "We've Received Your Inquiry — Kindle Direct Publishing House",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">
          <div style="background:#222E3E;padding:24px 32px;text-align:center;border-radius:6px 6px 0 0">
            <h1 style="color:#FF9900;margin:0;font-size:20px;letter-spacing:-0.3px">Kindle Direct Publishing House</h1>
            <p style="color:#ffffff60;margin:4px 0 0;font-size:12px">Professional Book Publishing Services</p>
          </div>
          <div style="padding:32px;background:#fff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 6px 6px">
            <h2 style="color:#131a22;margin-top:0;font-size:18px">Hi ${name || "there"}, we got your message!</h2>
            <p style="color:#565959;line-height:1.7;font-size:14px">
              Thank you for reaching out${service ? ` about <strong>${service}</strong>` : ""}. Our publishing team has received your inquiry and will contact you within <strong>1 business hour</strong>.
            </p>
            <p style="color:#565959;line-height:1.7;font-size:14px">
              Need to reach us sooner? Call or email us directly:
            </p>
            <table style="border-collapse:collapse;margin:20px 0">
              <tr>
                <td style="padding-right:16px">
                  <a href="tel:+13152390990" style="background:#FF9900;color:#fff;padding:11px 22px;border-radius:6px;text-decoration:none;font-weight:700;font-size:13px;display:inline-block">
                    Call +1 (315) 239-0990
                  </a>
                </td>
                <td>
                  <a href="mailto:info@directpublishinghouse.com" style="background:#008296;color:#fff;padding:11px 22px;border-radius:6px;text-decoration:none;font-weight:700;font-size:13px;display:inline-block">
                    Email Us
                  </a>
                </td>
              </tr>
            </table>
            <p style="color:#9ca3af;font-size:11px;border-top:1px solid #e5e7eb;padding-top:16px;margin-bottom:0">
              © 2026 Kindle Direct Publishing House · info@amazonpublisherhouse.com · Mon–Fri 9 AM–6 PM EST
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact-api]", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
