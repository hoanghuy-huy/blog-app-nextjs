import { Blog } from '@/lib/types';
import { sortBlogs } from '@/utils';
import Image from 'next/image';
import React from 'react';
import { Tag } from '../Tag';
import Link from 'next/link';

const HomeCoverSection: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh] group overflow-hidden  rounded-3xl">
        <Image
          src={blog?.image?.filePath?.replace('../public', '') || '/default-image-path.jpg'}
          className="w-full h-full object-center object-cover group-hover:scale-105 transition-all duration-150"
          alt={blog.title}
          fill
          blurDataURL={blog?.image?.blurhashDataUrl || ''}
          placeholder="blur"
        />

        <div className="w-3/4 p-16 flex flex-col items-start justify-center z-10 text-light">
          <Tag link={`/categories/${blog.tags[0]}`} name={blog.tags[0]} />
          <Link
            href=""
            className="mt-6 bg-gradient-to-r from-accentColor to-accentColor bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
          >
            <h1 className="capitalize font-bold text-4xl">{blog.title}</h1>
          </Link>
          <p className="inline-block mt-4 text-xl font-thin">{blog.description}</p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
