import { Routes } from 'nest-router';

import { UploadModule } from '../modules/upload/upload.module';
import { PostsModule } from '../modules/posts/posts.module';
import { UsersModule } from '../modules/users/users.module';
import { AuthModule } from '../modules/auth/auth.module';

export const routes: Routes = [
  {
    path: '/api',
    children: [
      { path: '/auth', module: AuthModule },

      { path: '/posts', module: PostsModule },

      { path: '/upload', module: UploadModule },

      { path: '/users', module: UsersModule },
    ],
  },
];
