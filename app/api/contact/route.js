import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ error: 'Faltan campos' }), {
      status: 400,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

   await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `Nueva consulta: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nuevo mensaje de contacto</title>
        </head>
        <body style="margin: 0; padding: 20px; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 12px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); overflow: hidden;">
            
            <!-- Header con logo -->
            <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 40px 30px; text-align: center;">
              <img src="https://i.imgur.com/your-image-url.png" alt="Who! Consultora Integral" style="width: 50px; height: 50px; margin-bottom: 20px; border-radius: 8px;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">📩 Nuevo Mensaje</h1>
              <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Formulario de contacto</p>
            </div>

            <!-- Contenido principal -->
            <div style="padding: 40px 30px;">
              
              <!-- Información del contacto -->
              <div style="background-color: #f8fafc; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
                <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px; font-weight: 600;">Información del contacto</h2>
                
                <div style="margin-bottom: 15px;">
                  <span style="display: inline-block; width: 70px; font-weight: 600; color: #475569;">Nombre:</span>
                  <span style="color: #1e293b;">${name}</span>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <span style="display: inline-block; width: 70px; font-weight: 600; color: #475569;">Email:</span>
                  <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                </div>
                
                <div>
                  <span style="display: inline-block; width: 70px; font-weight: 600; color: #475569;">Asunto:</span>
                  <span style="color: #1e293b;">${subject}</span>
                </div>
              </div>

              <!-- Mensaje -->
              <div style="background-color: white; border: 2px solid #e2e8f0; border-radius: 8px; padding: 25px;">
                <h3 style="margin: 0 0 15px 0; color: #1e293b; font-size: 18px; font-weight: 600;">Mensaje:</h3>
                <div style="color: #374151; line-height: 1.6; font-size: 15px;">
                  ${message.replace(/\n/g, '<br/>')}
                </div>
              </div>

              <!-- Botón de respuesta -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}?subject=Re: ${subject}" 
                  style="display: inline-block; background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; transition: transform 0.2s;">
                  Responder mensaje
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 25px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <div style="margin-bottom: 15px;">
                <img src="https://i.imgur.com/your-image-url.png" alt="Who! Consultora Integral" style="width: 40px; height: 40px; border-radius: 6px;">
              </div>
              <p style="margin: 0; color: #64748b; font-size: 14px;">
                Este mensaje fue enviado desde el formulario de contacto de <strong style="color: #1e293b;">who! consultora integral</strong>
              </p>
              <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 12px;">
                Mensaje recibido el ${new Date().toLocaleDateString('es-ES', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>

          <!-- Espaciado final -->
          <div style="height: 20px;"></div>
        </body>
        </html>
        `,
    });

    return new Response(JSON.stringify({ message: 'Correo enviado correctamente' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(JSON.stringify({ error: 'Error al enviar el correo' }), {
      status: 500,
    });
  }
}