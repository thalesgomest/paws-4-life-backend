import { Ong } from '@prisma/client';

export type OngDataBody = Omit<Ong, 'id' | 'createdAt'>;

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type OngData = Optional<OngDataBody, 'telephone' | 'site'>;
