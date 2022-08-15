import { prisma } from '../../src/config/database.js';

const cleanDatabase = async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "posts" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "posts_location" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "ongs" RESTART IDENTITY CASCADE`;
};

export default cleanDatabase;
