import { UserData, SignInData } from '../types/authInterface.js';
import bcrypt from '../utils/bcrypt.js';
import { generateToken } from '../utils/JWT.js';
import userRepository from '../repositories/userRepository.js';
import AppError from '../config/error.js';

export const signUp = async (UserData: UserData) => {
	const { email, password } = UserData;
	const user = await userRepository.getByEmail(email);
	if (user) {
		throw new AppError(
			'user already registered with this email',
			409,
			'user already registered with this email',
			'Ensure that the email is unique'
		);
	}
	const encryptedPassword = bcrypt.EncryptData(password);
	await userRepository.insert({ ...UserData, password: encryptedPassword });
};

export const signIn = async (signInData: SignInData) => {
	const { email, password } = signInData;
	const user = await userRepository.getByEmail(email);
	if (!user) {
		throw new AppError(
			'Invalid email or password',
			404,
			'Invalid email or password',
			'Ensure that the data is correct'
		);
	}
	const passwordIsValid = bcrypt.CompareEncryptedData(
		password,
		user.password
	);
	if (!passwordIsValid) {
		throw new AppError(
			'Invalid email or password',
			401,
			'Invalid email or password',
			'Ensure that the data is correct'
		);
	}
	const { id, name } = user;
	return { token: generateToken(id, name, email), userId: id, name: name };
};
