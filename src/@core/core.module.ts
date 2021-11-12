import { Module, Global, DynamicModule, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ScheduleService } from './services/scheduler.service';
import { PasswordService } from './services/password.service';

const PROVIDERS = [ScheduleService, PasswordService];

const Schemas = [];

@Global()
@Module({})
export class CoreModule {

  static forRoot(): DynamicModule {
    return {
      module: CoreModule,
      imports: [HttpModule, MongooseModule.forFeature(Schemas)],
      providers: [...PROVIDERS],
      exports: [...PROVIDERS],
    };
  }

}
