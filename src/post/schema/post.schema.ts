import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type PostDocument = HydratedDocument<BlogPost>;

@Schema({ timestamps: true })
export class BlogPost {
    @Prop({ required: true })
    author: string;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    description: string;
}

export const PostSchema = SchemaFactory.createForClass(BlogPost);