import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './dtos/post.dto';

@Controller('posts')
export class PostController {
    constructor(private postService: PostService) { }

    @Post("/")
    async createNewPost(@Body() body: PostDto) {
        return await this.postService.createPost(body)
    }

    @Get("/")
    async getAllBlogPost() {
        return await this.postService.findAllPost()
    }

    @Get("/:id")
    async getOnePost(@Param("id") id: string) {
        return await this.postService.findOne(id)
    }

    @Delete("/:id")
    async deleteOnePost(@Param("id") id: string) {
        return await this.postService.deletePost(id)
    }

    @Put("/:id")
    async editOnePost(@Param("id") id: string, @Body() post: PostDto) {
        return await this.postService.editPost(id, post)
    }

}
