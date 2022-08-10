import { Ong } from '@prisma/client';

export type OngData = Omit<Ong, 'id' | 'createdAt'>;
