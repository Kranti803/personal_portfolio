import nodemailer from 'nodemailer';

export const sendEmail = async (email, subject, message) => {

    const transporter = nodemailer.createTransport({
        // host: process.env.SMTP_HOST,
        // port: process.env.SMTP_PORT,
        // secure: true,
        // logger: true,
        // debug: true,
        // secureConnection: false,
        // auth: {
        //     user: process.env.SMTP_USER,
        //     pass: process.env.SMTP_PASS
        // }
        service: 'gmail',
        port: 465,
        secure: true,
        secureConnection: false,
        auth: {
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS,
        },
        tls: {
            rejectUnAuthorized: true
        }

    });

    await transporter.sendMail({
        from: email,
        to: process.env.SMTP_USER,
        subject,
        text: message
    })
}