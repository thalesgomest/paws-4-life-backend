import { OngData } from '../types/ongInterface.js';
import { Request, Response } from 'express';
import * as ongService from '../services/ongService.js';

export const registerOng = async (req: Request, res: Response) => {
	const ongData: OngData = req.body;
	await ongService.create(ongData);
	res.status(201).json({ message: 'ong created' });
};

export const getOngs = async (req: Request, res: Response) => {
	const ongs = await ongService.getAll();
	res.status(200).json(ongs);
};
