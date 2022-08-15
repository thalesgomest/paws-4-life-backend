import { prisma } from '../config/database.js';
import { OngData } from '../types/ongInterface.js';

const getByEmail = async (email: string) => {
	return prisma.ong.findUnique({
		where: {
			email,
		},
	});
};

const insert = async (ongData: OngData) => {
	try {
		const test = await prisma.ong.create({
			data: ongData,
		});
	} catch (error) {
		console.log({ message: error.message });
	}
};

const getAll = async () => {
	return prisma.ong.findMany();
};

export default {
	getByEmail,
	insert,
	getAll,
};
