import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogPost } from './schema/post.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDto } from './dtos/post.dto';

@Injectable()
export class PostService {
    constructor(@InjectModel(BlogPost.name) private postModel: Model<BlogPost>) { }

    async createPost(createCatDto: PostDto): Promise<BlogPost> {
        const createdCat = new this.postModel(createCatDto);
        return await createdCat.save();
    }

    async findAllPost(): Promise<BlogPost[]> {
        return await this.postModel.find().exec();
    }

    async findOne(_id: string): Promise<BlogPost> {
        const post =  await this.postModel.findById({ _id: _id })
        if (!post) throw new NotFoundException(`Post with the id ${_id} not found`)
        return post
    }


    async deletePost(_id: string): Promise<BlogPost> {
        await this.findOne(_id);
        return await this.postModel.findByIdAndDelete({ _id })
    }

    async editPost(_id: string, postDto: PostDto): Promise<BlogPost> {
        await this.findOne(_id);
        return await this.postModel.findByIdAndUpdate({ _id }, postDto, { new: true })
    }

}
