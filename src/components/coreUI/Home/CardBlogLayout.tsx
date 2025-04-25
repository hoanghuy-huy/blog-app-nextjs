import React from 'react';
import { Tag } from '../Tag';
import Image from 'next/image';
import Link from 'next/link';
import { Blog, DefaultSizeFeaturedPostImage } from '@/types';

const CardBlogLayout: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <div className="group inline-block overflow-hidden rounded-xl group">
      <Image
        src={blog?.image?.filePath?.replace('../public', '') || '/default-image-path.jpg'}
        className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-150"
        alt={blog.title}
        blurDataURL={blog?.image?.blurhashDataUrl || ''}
        placeholder="blur"
        height={blog.image.height ?? DefaultSizeFeaturedPostImage.height}
        width={blog.image.width ?? DefaultSizeFeaturedPostImage.width}
      />

      <div className="w-3/4 flex flex-col items-start justify-center text-light absolute z-20 bottom-0 p-10">
        <Tag
          link={`/categories/${blog.tags[0]}`}
          name={blog.tags[0]}
          className="px-6 text-sm py-2 !border"
        />
        <Link
          href=""
          className="mt-6 bg-gradient-to-r from-accentColor to-accentColor bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500  mb-8"
        >
          <h2 className="capitalize font-bold text-2xl">{blog.title}</h2>
        </Link>
      </div>
    </div>
  );
};

export default CardBlogLayout;
