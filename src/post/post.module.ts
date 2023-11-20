import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogPost, PostSchema } from './schema/post.schema';
import { PostController } from './post.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: BlogPost.name, schema: PostSchema }])],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule { }
