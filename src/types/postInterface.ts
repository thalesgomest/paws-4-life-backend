import { Post } from '@prisma/client';
import { PostLocation } from '@prisma/client';

export type PostCreateDataOmit = Omit<Post, 'id' | 'createdAt'>;
export type PostData = Omit<Post, 'id' | 'createdAt' | 'locationId' | 'userId'>;
export type PostLocationData = Omit<PostLocation, 'id'>;

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type PostCreateData = Optional<PostCreateDataOmit, 'image' | 'name'>;

export type PostBodyData = PostData & { location: PostLocationData };
