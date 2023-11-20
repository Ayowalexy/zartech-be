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
  MongooseModule.forRoot('mongodb+srv://seinde4:08032243047@cluster0.vhpfkpf.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [ConfigService, AppService],
})
export class AppModule { }
