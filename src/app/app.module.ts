import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostModule } from '../post/post.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
  PostModule,
  MongooseModule.forRoot(process.env.MONGO_URI_TEST)],
  controllers: [AppController],
  providers: [ConfigService, AppService],
})
export class AppModule { }
