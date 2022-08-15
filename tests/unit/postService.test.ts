import { jest } from '@jest/globals';
import cleanDatabase from '../helpers/cleanDatabase.js';
import {
	postDataFactory,
	postLocationDataFactory,
	createPostLocationData,
	createPostFactory,
} from '../factories/postFactory.js';
import { userIdAndTokenFactory } from '../factories/authFactory.js';
import postRepository from '../../src/repositories/postRepository.js';
import * as postService from '../../src/services/postService.js';

beforeEach(async () => {
	await cleanDatabase();
});

describe('Unitary Post tests', () => {
	describe('registerPostLocation', () => {
		it('should call function isert user with correct postData', async () => {
			const postLocationData = postLocationDataFactory();
			const id = await createPostLocationData(postLocationData);
			jest.spyOn(
				postRepository,
				'registerPostLocation'
			).mockImplementationOnce((): any => {
				return { id };
			});

			const result = await postService.registerPostLocation(
				postLocationData
			);
			expect(result).toEqual(id);
		});
	});
	describe('create', () => {
		it('should create a post with a correct postData', async () => {
			const { userId } = await userIdAndTokenFactory();

			const postData = postDataFactory();
			const postLocationData = {
				latitude: postData.location.latitude,
				longitude: postData.location.longitude,
			};
			const locationId = await createPostLocationData(postLocationData);
			const postCreateData = {
				type: postData.type,
				description: postData.description,
				image: postData.image,
				name: postData.name,
				locationId,
				userId,
			};
			const spy = jest
				.spyOn(postRepository, 'insert')
				.mockImplementationOnce((): any => {});

			await postService.create(postCreateData);
			expect(spy).toHaveBeenCalledWith(postCreateData);
		});
	});
	describe('getAllPosts', () => {
		it('should call function getAll and return one data', async () => {
			const { userId } = await userIdAndTokenFactory();

			const postData = postDataFactory();
			const postLocationData = {
				latitude: postData.location.latitude,
				longitude: postData.location.longitude,
			};
			const locationId = await createPostLocationData(postLocationData);
			const postCreateData = {
				type: postData.type,
				description: postData.description,
				image: postData.image,
				name: postData.name,
				locationId,
				userId,
			};
			const post = await createPostFactory(postCreateData);
			const spy = jest
				.spyOn(postRepository, 'getAllPosts')
				.mockImplementationOnce((): any => {
					return [post];
				});
			const result = await postService.getAllPosts();
			expect(spy).toHaveBeenCalledTimes(1);
			expect(result).toEqual([post]);
		});
	});
});
