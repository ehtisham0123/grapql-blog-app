import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Blog {
  @Field(() => Int, { description: 'Id of the Blog' })
  id: number;

   
  @Field(() => String, { description: 'Title of the blog' })
  title: string;

  @Field(() => String, { description: 'Description of the blog' })
  description: string;
}
