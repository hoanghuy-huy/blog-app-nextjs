import React from 'react';
import { sortBlogs } from '@/utils';
import { Blog } from '@/types';
import CardBlogLayout from './CardBlogLayout';
import CardBlogLayoutTwo from './CardBlogLayoutTwo';

const FeaturedPosts: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[1];

  return (
    <section className="w-full mt-32 flex flex-col items-center justify-center overflow-hidden px-10">
      <h2 className="w-full  inline-block font-bold capitalize text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-10 mt-16 w-full">
        <article className="col-span-1 row-span-2 relative">
          <CardBlogLayout blog={blog} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <CardBlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <CardBlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
      {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 gap-16 mt-16 w-full">
        <article className="row-span-2  bg-green-500">
          <CardBlogLayout blog={blog} />
        </article>
        <article className="col-span-1 row-span-1 relative  bg-green-500">2</article>
        <article className="col-span-1 row-span-1 relative  bg-green-500">3</article>
      </div> */}
    </section>
  );
};

export default FeaturedPosts;
