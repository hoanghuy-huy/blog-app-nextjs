import Link from 'next/link';
import React from 'react';
import { Sun } from 'lucide-react';

const Nav = () => {
  return (
    <nav className="w-max py-3 px-4 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6  right-1/2 translate-x-1/2 bg-light-80 backdrop-blur-sm">
      <Link className="mx-2" href="/">
        Home
      </Link>
      <Link className="mx-2" href={'/about'}>
        about
      </Link>
      <Link className="mx-2" href={'/contact'}>
        contact
      </Link>
      <button>
        <Sun />
      </button>
    </nav>
  );
};

export default Nav;
