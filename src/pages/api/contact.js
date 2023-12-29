
import { sendEmail } from '@/utils/sendEmail';

export const config = {
    api: {
        bodyParser: true,
    },
};

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {

            const { name, email, subject, message } = req.body;

            if (!name || !email || !subject || !message) return res.status(400).json({
                success: false,
                message: "All fields are required"

            })

            await sendEmail(email, subject, message);

            return res.status(200).json({
                success: true,
                message: `${name} : Thanks for leaving a message . `
            })

        } else {
            return res.status(400).json({
                success: false,
                message: "Only post method is allowed"
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}
