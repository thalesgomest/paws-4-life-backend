import { UserDataBody, SignInData } from '../types/authInterface.js';
import { Request, Response } from 'express';
import * as authService from '../services/authService.js';

export const signUp = async (req: Request, res: Response) => {
	const { name, email, password } = req.body as UserDataBody;
	const userData = { name, email, password };
	await authService.signUp(userData);
	res.status(201).json({ message: 'user created' });
};

export const signIn = async (req: Request, res: Response) => {
	const signInData = req.body as SignInData;
	const userData = await authService.signIn(signInData);
	res.status(200).json(userData);
};
