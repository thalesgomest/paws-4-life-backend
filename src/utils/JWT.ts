import jwt from 'jsonwebtoken';

export const generateToken = (userId: number, email: string) => {
	return jwt.sign({ userId, email }, process.env.JWT_SECRET, {
		expiresIn: '24h',
	});
};

export const validateToken = (token: string) => {
	return jwt.verify(token, process.env.JWT_SECRET);
};
