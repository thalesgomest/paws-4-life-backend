import { PostCreateData, PostLocationData } from '../types/postInterface.js';
import { prisma } from '../config/database.js';

const insert = async (postData: PostCreateData) => {
	try {
		return await prisma.post.create({
			data: postData,
		});
	} catch (error) {
		console.log({ message: error.message });
	}
};

const registerPostLocation = async (postLocationData: PostLocationData) => {
	return await prisma.postLocation.create({
		data: postLocationData,
	});
};

const getAllPosts = async () => {
	return prisma.post.findMany({
		include: {
			location: true,
		},
	});
};

export default {
	insert,
	registerPostLocation,
	getAllPosts,
};
