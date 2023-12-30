import nodemailer from 'nodemailer';

export const sendEmail = async (email, subject, message) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: process.env.NEXT_PUBLIC_SMTP_PORT,
        secure: true,
        secureConnection: false,
        auth: {
            user:process.env.NEXT_PUBLIC_SMTP_USER,
            pass:process.env.NEXT_PUBLIC_SMTP_PASS,
        },
        tls: {
            rejectUnAuthorized: true
        }

    });

    await transporter.sendMail({
        from: email,
        to:process.env.NEXT_PUBLIC_SMTP_USER,
        subject,
        text: message
    })
}

