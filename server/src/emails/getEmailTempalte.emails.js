export const getEmailTemplate = (name, email, message) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>New Contact Message</title>
  </head>

  <body style="margin:0; padding:0; background-color:#f4f4f7; font-family:Poppins, Arial, sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
      <tr>
        <td align="center">
          
          <table width="500" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; padding:30px;">
            
            <!-- Heading -->
            <tr>
              <td style="font-size:22px; font-weight:bold; color:#111;">
                New message from your website
              </td>
            </tr>

            <!-- Subtitle -->
            <tr>
              <td style="font-size:14px; color:#666; padding-top:10px;">
                You’ve received a new inquiry from your contact form.
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="padding:20px 0;">
                <hr style="border:none; border-top:1px solid #e5e7eb;" />
              </td>
            </tr>

            <!-- Card -->
            <tr>
              <td style="background:#fafafa; padding:15px; border-radius:8px;">
                
                <p style="font-size:14px; color:#888; margin:10px 0 5px;">Name:</p>
                <p style="font-size:16px; color:#111; margin:0;">${name}</p>

                <hr style="border:none; border-top:1px solid #e5e7eb; margin: 5px" />

                <p style="font-size:14px; color:#888; margin:15px 0 5px;">Email:</p>
                <p style="font-size:16px; color:#111; margin:0;">${email}</p>

                <hr style="border:none; border-top:1px solid #e5e7eb; margin: 5px" />

                <p style="font-size:14px; color:#888; margin:15px 0 5px;">Message:</p>
                <p style="font-size:16px; color:#111; margin:0;">
                  ${message}
                </p>

              </td>
            </tr>

            <!-- Button -->
            <tr>
              <td align="center" style="padding-top:25px;">
                <a href="mailto:${email}" 
                   style="display:inline-block; background:#000; color:#fff; padding:12px 20px; border-radius:6px; text-decoration:none; font-size:14px;">
                  Reply to client
                </a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="text-align:center; font-size:12px; color:#999; padding-top:20px;">
                This email was generated from your website contact form.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
</html>
`;
