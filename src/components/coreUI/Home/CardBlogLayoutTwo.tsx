'use client';
import { DefaultSizeFeaturedPostImage } from '@/types';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardBlogLayoutTwo = ({ blog }) => {
  return (
    <div className="group grid grid-cols-12 overflow-hidden rounded-xl">
      <Link href="#" className="col-span-4 h-ful rounded-xl overflow-hidden">
        <Image
          src={blog?.image?.filePath?.replace('../public', '') || '/default-image-path.jpg'}
          alt={blog.title}
          blurDataURL={blog?.image?.blurhashDataUrl || ''}
          placeholder="blur"
          height={blog.image.height ?? DefaultSizeFeaturedPostImage.height}
          width={blog.image.width ?? DefaultSizeFeaturedPostImage.width}
          className="w-full h-full aspect-square object-center object-cover group-hover:scale-110 transition-all ease-in-out duration-400 "
        />
      </Link>

      <div className="col-span-8 w-full pl-10 py-10">
        <span className="text-accentColor uppercase ">{blog.tags[0]}</span>
        <Link
          href="#"
          className="inline-block mt-6 bg-gradient-to-r from-accentColor to-accentColor bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
        >
          <h2 className="capitalize font-bold text-2xl text-dark">{blog.title}</h2>
        </Link>
        <span className="capitalize text-dark/50 py-3">
          {format(new Date(blog.publishedAt), 'dd MMMM yyyy')}
        </span>
      </div>
    </div>
  );
};

export default CardBlogLayoutTwo;
