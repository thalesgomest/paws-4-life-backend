import { faker } from '@faker-js/faker';
import {
	SignInData,
	UserData,
	UserDataBody,
} from '../../src/types/authInterface.js';
import bcrypt from '../../src/utils/bcrypt.js';
import { generateToken } from '../../src/utils/JWT.js';
import { prisma } from '../../src/config/database.js';

export const signUpDataFactory = (): UserData => {
	return {
		name: faker.name.fullName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
	};
};

export const signUpDataFactoryWithConfirmPassword = (): UserDataBody => {
	const password = faker.internet.password();
	return {
		name: faker.name.fullName(),
		email: faker.internet.email(),
		password,
		confirmPassword: password,
	};
};

export const signInDataFactory = (): SignInData => {
	return {
		email: faker.internet.email(),
		password: faker.internet.password(),
	};
};

export const createUserFactory = async (user: UserData) => {
	return await prisma.user.create({
		data: {
			...user,
			password: bcrypt.EncryptData(user.password),
		},
	});
};

export const userIdAndTokenFactory = async () => {
	const user = signUpDataFactory();
	const { id, name, email } = await createUserFactory(user);
	const token = generateToken(id, name, email);
	return { token, userId: id };
};
