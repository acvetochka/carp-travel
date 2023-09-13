import Link from 'next/link';

import menu from '../data/menu';

const menuArr = menu.map(item => ({ ...item, src: `#${item.src}` }));

// {
//   "id": 3,
//   "src": "career",
//   "text": "Career"
// }

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[999] bg-[rgba(1, 10, 5, 0.75)] backdrop-blur-xl transform ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      } transition-transform duration-700 ease-in-out`}
    >
      <div className="container w-full relative flex justify-center items-center h-screen">
        <ul className="p-8 flex flex-col gap-12 items-center">
          {menuArr.map(({ id, src, text }) => (
            <li key={id}>
              <Link href={src} onClick={onClose}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <button className="absolute top-11 right-5 uppercase" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
