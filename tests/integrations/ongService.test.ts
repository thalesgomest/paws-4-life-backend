import { faker } from '@faker-js/faker';
import cleanDatabase from '../helpers/cleanDatabase.js';
import supertest from 'supertest';
import app from '../../src/app.js';
import { ongDataFactory, createOngFactory } from '../factories/ongFactory.js';

beforeEach(async () => {
	await cleanDatabase();
});

describe('Integration Ong Tests', () => {
	describe('POST /register/ong', () => {
		it('should create a new ong, return status code equal 201', async () => {
			const ongData = ongDataFactory();

			const response = await supertest(app)
				.post('/register/ong')
				.send(ongData);

			expect(response.status).toBe(201);
		});
		it('should not create a new ong, because already exist a ong with same email. Return status code equal 409', async () => {
			const ongData = ongDataFactory();
			await createOngFactory({
				...ongData,
			});

			const response = await supertest(app)
				.post('/register/ong')
				.send(ongData);

			expect(response.status).toBe(409);
		});
	});

	describe('GET /ongs', () => {
		it('return one ong with getAll', async () => {
			const ongData = ongDataFactory();

			const response = await supertest(app)
				.post('/register/ong')
				.send(ongData);

			expect(response.status).toBe(201);
			expect(response.body).toEqual({ message: 'ong created' });
		});
	});
});
