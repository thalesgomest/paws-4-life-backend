import { PostCreateData, PostLocationData } from '../types/postInterface.js';
import { prisma } from '../config/database.js';

export const insert = async (postData: PostCreateData) => {
	try {
		return await prisma.post.create({
			data: postData,
		});
	} catch (error) {
		console.log({ message: error.message });
	}
};

export const registerPostLocation = async (
	postLocationData: PostLocationData
) => {
	return await prisma.postLocation.create({
		data: postLocationData,
	});
};

export const getAllPosts = async () => {
	return prisma.post.findMany({
		include: {
			location: true,
		},
	});
};
