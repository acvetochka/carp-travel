'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import Navbar from './Navbar';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-transparent absolute w-full py-9 md:py-6 ">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="logo"
            width={61}
            height={33}
            style={{ width: 'auto' }}
            priority
          />
        </Link>
        {isMobile ? (
          <div className="relative">
            <button
              type="button"
              className="block lg:hidden uppercase"
              onClick={openMobileMenu}
            >
              Menu
            </button>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
          </div>
        ) : (
          <Navbar />
        )}
      </div>
    </header>
  );
};

export default Header;
