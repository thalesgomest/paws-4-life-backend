import { jest } from '@jest/globals';
import cleanDatabase from '../helpers/cleanDatabase.js';
import { ongDataFactory, createOngFactory } from '../factories/ongFactory.js';
import ongRepository from '../../src/repositories/ongRepository.js';
import * as ongService from '../../src/services/ongService.js';

beforeEach(async () => {
	await cleanDatabase();
});

describe('Unitary Ongs tests', () => {
	describe('create', () => {
		it('should call function isert user with correct ongData', async () => {
			const ongData = ongDataFactory();
			const spy = jest
				.spyOn(ongRepository, 'insert')
				.mockImplementationOnce((): any => {});

			jest.spyOn(ongRepository, 'getByEmail').mockImplementationOnce(
				(): any => {}
			);
			await ongService.create(ongData);
			expect(spy).toHaveBeenCalledWith(ongData);
		});
	});
	describe('getAll', () => {
		it('should call function getAll and return one data', async () => {
			const ongData = ongDataFactory();
			const ong = await createOngFactory(ongData);
			const spy = jest
				.spyOn(ongRepository, 'getAll')
				.mockImplementationOnce((): any => {
					return [ong];
				});
			const result = await ongService.getAll();
			expect(spy).toHaveBeenCalledTimes(1);
			expect(result).toHaveLength(1);
		});
	});
});
