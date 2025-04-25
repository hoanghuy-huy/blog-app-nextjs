import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-3/4 font-light text-base">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
      <div className="mt-6 min-w-[384px] flex items-stretch bg-light p-2 rounded mx-4">
        <input
          className="w-full bg-transparent text-dark  focus:ring-0 border-0 border-b mr-2 pb-1 px-2"
          type="email"
          placeholder="Enter your email"
        />
        <input
          type="submit"
          className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1"
        />
      </div>
    </footer>
  );
};

export default Footer;
