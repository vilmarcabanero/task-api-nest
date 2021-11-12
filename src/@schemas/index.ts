import { UsersSchema } from '../modules/users/schemas/users.schema';
import { PostsSchema } from '../modules/posts/schemas/posts.schema';
import { TasksSchema } from '../modules/tasks/schemas/tasks.schema';

export const USERS = { name: 'Users', schema: UsersSchema };
export const POSTS = { name: 'Posts', schema: PostsSchema };
export const TASKS = { name: 'Tasks', schema: TasksSchema };
