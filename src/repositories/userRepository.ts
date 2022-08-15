import { UserData } from '../types/authInterface.js';
import { prisma } from '../config/database.js';

const insert = async (user: UserData) => {
	return prisma.user.create({
		data: user,
	});
};

const getByEmail = async (email: string) => {
	return prisma.user.findUnique({
		where: {
			email,
		},
	});
};

const getUserById = async (userId: number) => {
	return prisma.user.findUnique({
		where: {
			id: userId,
		},
	});
};

export default {
	insert,
	getByEmail,
	getUserById,
};
