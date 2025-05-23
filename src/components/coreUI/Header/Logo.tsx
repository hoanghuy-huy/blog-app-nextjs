import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoImage from '@/assets/images/profile-img.png';
const Logo = () => {
  return (
    <Link href={'./'} className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
        <Image src={logoImage} alt="logo" className="w-full h-auto rounded-full" />
      </div>
      <span className='font-bold text-xl'>CodeBusks</span>
    </Link>
  );
};

export default Logo;
