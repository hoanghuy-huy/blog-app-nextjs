import { cx } from '@/utils';
import Link from 'next/link';
import React from 'react';

interface TagProps {
  link: string;
  name: React.ReactNode;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ link, name, className = '', ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        'inline-block px-10 py-3 font-semibold capitalize bg-dark text-light rounded-full border-2 border-solid border-light hover:scale-110 transition-all ease-in-out duration-200',
        className
      )}
      {...props}
    >
      {name}
    </Link>
  );
};

export default Tag;
