'use client';

import { Link } from 'react-scroll';

import menu from '../data/menu';

const duration = 600;

const Navbar = () => {
  return (
    <ul className="flex gap-14">
      {menu.map(({ id, src, text }, idx) => (
        <li key={id}>
          <Link
            className="hover:cursor-pointer"
            to={src}
            spy={true}
            smooth={true}
            duration={duration * (idx + 1)}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
