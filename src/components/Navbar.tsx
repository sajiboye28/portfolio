import { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'experience' },
    { id: 4, link: 'skills' },
    { id: 5, link: 'projects' },
    { id: 6, link: 'contact' },
  ];

  return (
    <nav className="fixed w-full h-20 bg-primary-light/80 dark:bg-primary/80 backdrop-blur-sm z-50 transition-colors duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 h-full">
        <h1 className="text-3xl font-bold text-secondary">AS.</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li key={id} className="nav-link px-4 capitalize text-lightText-dark dark:text-lightText">
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div onClick={handleClick} className="md:hidden z-10 cursor-pointer text-secondary">
          {nav ? <XMarkIcon className="w-6" /> : <Bars3Icon className="w-6" />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={`${
            nav
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-full'
          } transition-all duration-500 ease-in-out md:hidden absolute top-0 right-0 w-full h-screen bg-primary-light dark:bg-primary flex flex-col justify-center items-center`}
        >
          {links.map(({ id, link }) => (
            <li key={id} className="py-6 text-4xl capitalize nav-link text-lightText-dark dark:text-lightText">
              <Link
                onClick={handleClick}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
