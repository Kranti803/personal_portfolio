import nodemailer from 'nodemailer';

export const sendEmail = async (email, subject, message) => {

    const transporter = nodemailer.createTransport({
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
        to:"krantikumar803@gmail.com",
        subject,
        text: message
    })
}

