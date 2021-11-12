import { UsersSchema } from '../modules/users/schemas/users.schema';
import { PostsSchema } from '../modules/posts/schemas/posts.schema';

export const USERS = { name: 'Users', schema: UsersSchema };
export const POSTS = { name: 'Posts', schema: PostsSchema };
