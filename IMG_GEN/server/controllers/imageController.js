import FormData from 'form-data';
import axios from 'axios';
import user from '../models/user.js'; // User model

export const generateImage = async (req, res) => {
    try {
        const { prompt } = req.body;
        const userId = req.user.id; // Get userId from req.user
        const currentUser = await user.findById(userId);

        if (!prompt || !currentUser) {
            return res.status(400).json({ message: "Missing prompt or user", success: false });
        }

        // Check credits
        if (currentUser.creditBalance <= 0) {
            return res.status(403).json({ message: "Insufficient credits", success: false });
        }

        // ✅ Prepare form-data for Clipdrop API
        const formData = new FormData();
        formData.append('prompt', prompt);

        const { data } = await axios.post(
            'https://clipdrop-api.co/text-to-image/v1',
            formData,
            {
                headers: {
                    ...formData.getHeaders(), // important for multipart
                    'x-api-key': process.env.CLIPDROP_API,
                },
                responseType: 'arraybuffer',
            }
        );

        // Convert to base64
        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`;

        // Deduct 1 credit
        await user.findByIdAndUpdate(userId, {
            $inc: { creditBalance: -1 },
        });

        res.status(200).json({
            message: "Image generated successfully",
            success: true,
            creditBalance: currentUser.creditBalance - 1,
            resultImage,
        });

    } catch (error) {
        // ✅ Better error handling
        if (error.response) {
            console.error(
                "Error generating image:",
                error.response.status,
                error.response.data.toString()
            );
            res.status(error.response.status).json({
                message: "Clipdrop API error",
                details: error.response.data.toString(),
                success: false,
            });
        } else {
            console.error("Error generating image:", error.message);
            res.status(500).json({ message: error.message, success: false });
        }
    }
};
