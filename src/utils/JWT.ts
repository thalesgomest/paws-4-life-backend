import jwt from 'jsonwebtoken';

export const generateToken = (userId: number, name: string, email: string) => {
	return jwt.sign({ userId, name, email }, process.env.JWT_SECRET, {
		expiresIn: '24h',
	});
};

export const validateToken = (token: string) => {
	return jwt.verify(token, process.env.JWT_SECRET);
};
