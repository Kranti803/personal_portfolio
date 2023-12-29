import nodemailer from 'nodemailer';

export const sendEmail = async (email, subject, message) => {

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure:true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }

    });

    await transporter.sendMail({
        from: email,
        to: process.env.SMTP_USER,
        subject,
        text: message
    })
}