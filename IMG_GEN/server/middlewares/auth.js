import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
        const {token} = req.headers;

        if (!token) {
            return res.status(401).json({ message: 'Authorization token missing or invalid', success: false });
        }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(decoded.id) {
            req.user = { id: decoded.id }; // Attach user ID to request object in req.user
        }else {
            return res.status(401).json({ message: 'Invalid token structure', success: false });
        }

        next(); // Proceed to next middleware/route
    } catch (error) {
        console.error('Token verification failed:', error);
    }
};

export default authMiddleware;
