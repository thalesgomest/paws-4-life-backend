import { PostCreateData, PostLocationData } from '../types/postInterface.js';
import * as postRepository from '../repositories/postRepository.js';

export const create = async (postData: PostCreateData) => {
	await postRepository.insert(postData);
};

export const registerPostLocation = async (
	postLocationData: PostLocationData
) => {
	try {
		const { id } = await postRepository.registerPostLocation(
			postLocationData
		);
		return id;
	} catch (error) {
		console.error({ message: error.message });
	}
};

export const getAllPosts = async () => {
	try {
		const posts = await postRepository.getAllPosts();
		return posts;
	} catch (error) {
		console.error({ message: error.message });
	}
};
