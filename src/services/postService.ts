import { PostCreateData, PostLocationData } from '../types/postInterface.js';
import postRepository from '../repositories/postRepository.js';

export const create = async (postData: PostCreateData) => {
	await postRepository.insert(postData);
};

export const registerPostLocation = async (
	postLocationData: PostLocationData
) => {
	const { id } = await postRepository.registerPostLocation(postLocationData);
	return id;
};

export const getAllPosts = async () => {
	const posts = await postRepository.getAllPosts();
	return posts;
};
