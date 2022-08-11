import { Post } from '@prisma/client';
import { PostLocation } from '@prisma/client';

export type PostCreateData = Omit<Post, 'id' | 'createdAt'>;
export type PostData = Omit<Post, 'id' | 'createdAt' | 'locationId' | 'userId'>;
export type PostLocationData = Omit<PostLocation, 'id'>;

export type PostBodyData = PostData & { location: PostLocationData };
