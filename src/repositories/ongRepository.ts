import { prisma } from '../config/database.js';
import { OngData } from '../types/ongInterface.js';

export const getByEmail = async (email: string) => {
	return prisma.ong.findUnique({
		where: {
			email,
		},
	});
};

export const insert = async (ongData: OngData) => {
	try {
		const test = await prisma.ong.create({
			data: ongData,
		});
	} catch (error) {
		console.log({ message: error.message });
	}
};
