import { faker } from '@faker-js/faker';
import cleanDatabase from '../helpers/cleanDatabase.js';
import supertest from 'supertest';
import app from '../../src/app.js';
import {
	signUpDataFactoryWithConfirmPassword,
	signUpDataFactory,
	createUserFactory,
} from '../factories/authFactory.js';

beforeEach(async () => {
	await cleanDatabase();
});

describe('Integration Authentication Tests', () => {
	describe('POST /signup', () => {
		it('should create a new user, return status code equal 201', async () => {
			const signUpData = signUpDataFactoryWithConfirmPassword();

			const response = await supertest(app)
				.post('/signup')
				.send(signUpData);

			expect(response.status).toBe(201);
		});
		it('should not create a new user, because already exist a user with same email. Return status code equal 409', async () => {
			const signUpData = signUpDataFactoryWithConfirmPassword();
			await createUserFactory({
				name: signUpData.name,
				email: signUpData.email,
				password: signUpData.password,
			});

			const response = await supertest(app)
				.post('/signup')
				.send(signUpData);

			expect(response.status).toBe(409);
		});
	});
	describe('POST /signin', () => {
		it('should create a new user, return status code equal 201', async () => {
			const signUpData = signUpDataFactory();
			await createUserFactory(signUpData);

			const response = await supertest(app).post('/signin').send({
				email: signUpData.email,
				password: signUpData.password,
			});

			expect(response.status).toBe(200);
		});
		it('password error. Should return status code equal 401', async () => {
			const signUpData = signUpDataFactory();
			const password = faker.internet.password();
			await createUserFactory(signUpData);

			const response = await supertest(app).post('/signin').send({
				email: signUpData.email,
				password: password,
			});

			expect(response.status).toBe(401);
		});
		it('email error. Should return status code equal 404', async () => {
			const signUpData = signUpDataFactory();
			const email = faker.internet.email();
			await createUserFactory(signUpData);

			const response = await supertest(app).post('/signin').send({
				email: email,
				password: signUpData.password,
			});

			expect(response.status).toBe(404);
		});
	});
});
