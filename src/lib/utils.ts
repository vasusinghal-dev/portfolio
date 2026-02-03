export function emailFormat({
  email,
  name,
  message,
}: {
  email: string;
  name: string;
  message: string;
}) {
  return {
    from: "Portfolio <hello@mail.vasusinghal.com>",
    to: [process.env.CONTACT_TO_EMAIL!],
    replyTo: email,
    subject: `New contact message from ${name}`,
    html: `
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f7fb;padding:24px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.06);">
            
            <!-- Header -->
            <tr>
              <td style="background:#0f172a;padding:20px 24px;">
                <h1 style="margin:0;font-size:20px;color:#ffffff;font-family:Arial,sans-serif;">
                  📩 New Portfolio Contact
                </h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:24px;font-family:Arial,sans-serif;color:#111827;line-height:1.6;">
                
                <p style="margin:0 0 12px;">
                  You’ve received a new message from your portfolio contact form.
                </p>

                <table width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0;">
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;width:80px;"><strong>Name</strong></td>
                    <td style="padding:8px 0;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;"><strong>Email</strong></td>
                    <td style="padding:8px 0;">
                      <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">
                        ${email}
                      </a>
                    </td>
                  </tr>
                </table>

                <div style="margin-top:16px;">
                  <p style="margin:0 0 8px;color:#6b7280;"><strong>Message</strong></p>
                  <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;padding:16px;font-size:14px;">
                    ${message.replace(/\n/g, "<br />")}
                  </div>
                </div>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px 24px;background:#f9fafb;font-family:Arial,sans-serif;font-size:12px;color:#6b7280;text-align:center;">
                Sent from your portfolio contact form
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  `,
  };
}
