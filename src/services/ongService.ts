import AppError from '../config/error.js';
import { OngData } from '../types/ongInterface.js';
import * as ongRepository from '../repositories/ongRepository.js';

export const create = async (ongData: OngData) => {
	const { email } = ongData;
	const ong = await ongRepository.getByEmail(email);
	if (ong) {
		throw new AppError(
			'ong already registered with this email',
			409,
			'ong already registered with this email',
			'Ensure that the email is unique'
		);
	}
	await ongRepository.insert(ongData);
};

export const getAll = async () => {
	const ongs = await ongRepository.getAll();
	return ongs;
};
