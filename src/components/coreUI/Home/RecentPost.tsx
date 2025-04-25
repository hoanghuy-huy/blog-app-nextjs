import React from 'react';
import Link from 'next/link';
import { sortBlogs } from '@/utils';
import CardBlogLayoutThree from './CardBlogLayoutThree';

const RecentPost = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full px-10 mt-32 flex flex-col items-center justify-center">
      <div className="flex justify-between w-full">
        <div>
          <h2 className="w-full inline-block font-bold capitalize text-4xl">Featured Posts</h2>
        </div>
        <div>
          <Link
            href="#"
            className="w-full inline-block text-accentColor font-medium capitalize text-lg underline underline-offset-2"
          >
            View more
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(3, 9).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <CardBlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPost;
