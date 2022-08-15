import { jest } from '@jest/globals';
import cleanDatabase from '../helpers/cleanDatabase.js';
import bcrypt from '../../src/utils/bcrypt.js';
import {
	signUpDataFactory,
	signInDataFactory,
	createUserFactory,
} from '../factories/authFactory.js';
import userRepository from '../../src/repositories/userRepository.js';
import * as authService from '../../src/services/authService.js';

beforeEach(async () => {
	await cleanDatabase();
});

describe('Unitary Authentication tests', () => {
	describe('sign-up', () => {
		it('should call function isert user with correct signUpData', async () => {
			const signUpData = signUpDataFactory();
			const encryptedPassword = bcrypt.EncryptData(signUpData.password);
			const spy = jest
				.spyOn(userRepository, 'insert')
				.mockImplementationOnce((): any => {});

			jest.spyOn(userRepository, 'getByEmail').mockImplementationOnce(
				(): any => {}
			);
			jest.spyOn(bcrypt, 'EncryptData').mockImplementationOnce(
				(): any => encryptedPassword
			);

			await authService.signUp(signUpData);
			expect(spy).toBeCalledWith({
				...signUpData,
				password: encryptedPassword,
			});
		});
	});
	describe('sign-in', () => {
		it('should return userId, name and token with correct signInData', async () => {
			const signInData = signInDataFactory();
			const signUpData = signUpDataFactory();
			const user = await createUserFactory(signUpData);

			jest.spyOn(userRepository, 'getByEmail').mockImplementationOnce(
				(): any => {
					return user;
				}
			);
			jest.spyOn(bcrypt, 'CompareEncryptedData').mockImplementationOnce(
				(): any => true
			);
			const result = await authService.signIn(signInData);
			expect(result).toEqual({
				token: expect.any(String),
				userId: user.id,
				name: user.name,
			});
		});
	});
});
