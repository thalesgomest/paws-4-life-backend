import { PostCreateData, PostLocationData } from '../types/postInterface.js';
import { prisma } from '../config/database.js';

export const insert = async (postData: PostCreateData) => {
	return prisma.post.create({
		data: postData,
	});
};

export const registerPostLocation = async (
	postLocationData: PostLocationData
) => {
	return prisma.postLocation.create({
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
