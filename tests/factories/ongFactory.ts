import { faker } from '@faker-js/faker';
import { OngData } from '../../src/types/ongInterface.js';
import { prisma } from '../../src/config/database.js';

export const ongDataFactory = (): OngData => {
	return {
		name: faker.name.fullName(),
		telephone: faker.phone.number('(35) 9####-####'),
		address: faker.address.streetAddress(),
		email: faker.internet.email(),
		site: faker.internet.url(),
	};
};

export const createOngFactory = async (ongData: OngData) => {
	return await prisma.ong.create({
		data: ongData,
	});
};
