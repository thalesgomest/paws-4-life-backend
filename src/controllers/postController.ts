import { Request, Response } from 'express';
import { PostBodyData, PostCreateData } from '../types/postInterface.js';
import * as postService from '../services/postService.js';

export const createPost = async (req: Request, res: Response) => {
	const postBodyData = req.body as PostBodyData;
	const { latitude, longitude } = postBodyData.location;
	const { type, description, image } = postBodyData;
	const { userId } = res.locals.userData;
	const locationId = await postService.registerPostLocation({
		latitude,
		longitude,
	});
	const postData: PostCreateData = {
		type,
		description,
		image,
		locationId,
		userId,
	};
	await postService.create(postData);
	res.sendStatus(200);
};

export const getPosts = async (req: Request, res: Response) => {
	const post = await postService.getAllPosts();
	res.status(200).json(post);
};
