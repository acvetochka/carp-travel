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
          <button
            type="button"
            className="block md:hidden uppercase"
            onClick={openMobileMenu}
          >
            Menu
          </button>
          <Navbar />
          {/* {isMobile ? (
          // <div className="relative">
          <>
            <button
              type="button"
              className="block md:hidden uppercase"
              onClick={openMobileMenu}
            >
              Menu
            </button>
          </>
        ) : (
          // </div>
          <Navbar />
        )} */}
        </div>
        {/* <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} /> */}
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default Header;
