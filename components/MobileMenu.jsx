"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import menu from '@/data/menu';

const menuArr = menu.map(item => ({ ...item, src: `#${item.src}` }));

export const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[999] bg-[rgba(1, 10, 5, 0.75)] backdrop-blur-xl transform ${
        isOpen
          ? 'translate-y-0 opacity-1 visible overflow-y-scroll'
          : '-translate-y-full opacity-0 invisible pointer-events-none'
      } transition-all duration-500 ease-in-out`}
    >
      <div className="container w-full relative flex justify-center items-center h-screen">
        <ul className="p-8 flex flex-col gap-12 items-center">
          {menuArr.map(({ id, src, text }) => (
            <li key={id}>
              <Link href={src} onClick={onClose} className="link">
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="absolute top-11 right-5 uppercase hover:tracking-[1.26px] transition-font duration-300 easy-in-out"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

