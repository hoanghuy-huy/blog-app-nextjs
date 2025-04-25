import { Blog } from '@/types/blog';
import { compareDesc, parseISO } from 'date-fns';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export const cx = (...classname: string[]) => classname.filter(Boolean).join(' ');

export const sortBlogs = (blogs: Blog[]) => {
  return blogs
    .slice()
    .sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)));
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
