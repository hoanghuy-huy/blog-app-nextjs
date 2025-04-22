import { Blog } from '@/lib/types/blog';
import { compareDesc, parseISO } from 'date-fns';

export const cx = (...classname: string[]) => classname.filter(Boolean).join(' ');

export const sortBlogs = (blogs: Blog[]) => {
  return blogs.slice().sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)));
};
