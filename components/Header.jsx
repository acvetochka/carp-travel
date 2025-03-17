'use client';

import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from './Navbar';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-transparent absolute w-full py-9 md:py-6 ">
        <div className="container flex justify-between items-center">
          <Link href="/" aria-label="logo-carp-travel">
            <Image
              src="/Logo.svg"
              alt="logo"
              width={61}
              height={33}
              style={{ width: '61px', height: '33px' }}
              priority
            />
          </Link>
          {isMobile ? (<button
            type="button"
            className="block md:hidden uppercase hover:tracking-[1.26px] transition-font duration-300 easy-in-out"
            onClick={openMobileMenu}
          >
            Menu
          </button>):
          (<Navbar />)}
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default Header;
