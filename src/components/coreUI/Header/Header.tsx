import React from 'react';
import Logo from './Logo';
import { Nav } from '@/components/coreUI/Nav';
import { FacebookIcon, GitHubIcon, LinkedInIcon } from '@/components/Icons';

const Header = () => {
  return (
    <div className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <Nav />
      <div className="d-flex items-center">
        <a
          href="https://facebook.com/"
          className="w-6 h-6 inline-block mr-2 hover:scale-125 duration-200 ease-in-out"
          target='_blank'
          
        >
          <FacebookIcon />
        </a>
        <a
          href="https://linkedin.com/"
          className="w-6 h-6 inline-block mr-2 hover:scale-125 duration-200 ease-in-out"
          target='_blank'
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/"
          className="w-6 h-6 inline-block mr-2 hover:scale-125 duration-200 ease-in-out"
          target='_blank'
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default Header;
