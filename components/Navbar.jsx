'use client';

import { Link } from 'react-scroll';

import menu from '../data/menu';

const duration = 400;

const Navbar = () => {
  return (
    <ul className="flex md:gap-6 xl:gap-14">
      {menu.map(({ id, src, text }, idx) => (
        <li key={id}>
          <Link
            className="text-[14px] tracking-[1.4px] hover:cursor-pointer hover:underline transition-[text-decoration] duration-1000"
            to={src}
            spy={true}
            smooth={true}
            duration={duration * (idx + 1)}
            href="/"
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
