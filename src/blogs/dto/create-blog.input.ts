import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBlogInput {
  
  @Field(() => String, { description: 'Title of the blog' })
  title: string;

  @Field(() => String, { description: 'Description of the blog' })
  description: string;
}
