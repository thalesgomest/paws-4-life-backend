import { faker } from '@faker-js/faker';
import {
	PostBodyData,
	PostCreateData,
	PostLocationData,
} from '../../src/types/postInterface.js';
import { prisma } from '../../src/config/database.js';

export const postDataFactory = (): PostBodyData => {
	return {
		type: 'Lost',
		description: faker.lorem.sentence(),
		image: faker.image.imageUrl(),
		name: faker.name.firstName(),
		location: {
			latitude: faker.datatype.number({ min: -100, max: 100 }),
			longitude: faker.datatype.number({ min: -100, max: 100 }),
		},
	};
};

export const postLocationDataFactory = (): PostLocationData => {
	return {
		latitude: faker.datatype.number({ min: -100, max: 100 }),
		longitude: faker.datatype.number({ min: -100, max: 100 }),
	};
};

export const createPostLocationData = async (
	postLocationData: PostLocationData
) => {
	const { id } = await prisma.postLocation.create({
		data: postLocationData,
	});
	return id;
};

export const createPostFactory = async (postData: PostCreateData) => {
	return await prisma.post.create({
		data: postData,
	});
};
