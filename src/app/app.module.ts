import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from 'nest-router';
import { routes } from './app.routes';
import { ConfigModule } from '../@core/config/config.module';
import { ConfigService } from '../@core/config/config.service';
import { UploadModule } from '../modules/upload/upload.module';
import { CoreModule } from '@core/core.module';
import { UsersModule } from '../modules/users/users.module';
import { AuthModule } from '../modules/auth/auth.module';
import { PostsModule } from '../modules/posts/posts.module';
import { TasksModule } from '../modules/tasks/tasks.module';

const MongooseConfig = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.getEnv('MONGODB_URI'),
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
  }),
};

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync(MongooseConfig),
    RouterModule.forRoutes(routes),
    CoreModule.forRoot(),
    UploadModule,
    AuthModule,
    UsersModule,
    PostsModule,
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
