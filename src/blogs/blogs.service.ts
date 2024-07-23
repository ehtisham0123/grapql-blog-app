import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogsService {
  private blogs: Blog[] = [
    {
      id: 1,
      title: 'First Blog Post',
      description: 'This is the first blog post.',
    },
    {
      id: 2,
      title: 'Second Blog Post',
      description: 'This is the second blog post with some interesting content.',
    },
    {
      id: 3,
      title: 'Third Blog Post',
      description: 'A third blog post to provide more examples.',
    },
  ];
  private idCounter = 4; // Start counting from 4 to ensure unique IDs for new entries

  // Create a new blog
  create(createBlogInput: CreateBlogInput): Blog {
    const newBlog: Blog = {
      id: this.idCounter++,
      ...createBlogInput,
    };
    this.blogs.push(newBlog);
    return newBlog;
  }

  // Retrieve all blogs
  findAll(): Blog[] {
    return this.blogs;
  }

  // Retrieve a single blog by ID
  findOne(id: number): Blog {
    const blog = this.blogs.find(blog => blog.id === id);
    if (!blog) {
      throw new NotFoundException(`Blog with ID ${id} not found`);
    }
    return blog;
  }

  // Update an existing blog by ID
  update(id: number, updateBlogInput: UpdateBlogInput): Blog {
    const blogIndex = this.blogs.findIndex(blog => blog.id === id);
    if (blogIndex === -1) {
      throw new NotFoundException(`Blog with ID ${id} not found`);
    }
    const updatedBlog = { ...this.blogs[blogIndex], ...updateBlogInput };
    this.blogs[blogIndex] = updatedBlog;
    return updatedBlog;
  }

  // Remove a blog by ID
  remove(id: number): Blog {
    const blogIndex = this.blogs.findIndex(blog => blog.id === id);
    if (blogIndex === -1) {
      throw new NotFoundException(`Blog with ID ${id} not found`);
    }
    const [removedBlog] = this.blogs.splice(blogIndex, 1);
    return removedBlog;
  }
}
