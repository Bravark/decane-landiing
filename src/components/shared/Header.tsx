'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/svgs/logo.svg';
import download from '@/images/download.gif';
import menu from '@/svgs/menu.svg';
import close from '@/svgs/close.svg';

const NAV_ITEMS = [
  { name: 'Wallet', href: '#' },
  // { name: 'Features', href: '#' },
  // { name: 'Resources', href: '#' },
  { name: 'Community', href: '#' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navbar-bg/90 backdrop-blur-md py-4' : 'bg-navbar-bg/100 backdrop-blur-[16.75px] py-6'
      }`}>
        <div className="wrapper flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <Image 
              src={logo} 
              alt="Decane Logo" 
              width={40} 
              height={40} 
              className="w-8 h-8 lg:w-10 lg:h-10" 
            />
            <span className="font-viga text-2xl lg:text-4xl text-decane-yellow">
              Decane
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-2 bg-navlinks-bg rounded-full px-6 py-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-white hover:text-decane-yellow transition-colors font-tajawal text-sm xl:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="#"
              className="flex items-center gap-2 bg-decane-yellow hover:bg-decane-yellow/90 text-black font-figtree font-medium px-6 py-3 rounded-full transition-colors"
            >
              <span>Download</span>
              <Image src={download} alt="" width={20} height={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 -mr-2 z-50"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <Image 
              src={isMenuOpen ? close : menu} 
              alt={isMenuOpen ? 'Close menu' : 'Open menu'} 
              width={24} 
              height={24} 
              className="w-6 h-6 text-white"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } lg:hidden`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-black z-[100] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center justify-between mb-8">
            <Link 
              href="/" 
              className="flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image src={logo} alt="Decane" width={32} height={32} />
              <span className="font-viga text-xl text-decane-yellow">Decane</span>
            </Link>
            <button 
              onClick={toggleMenu}
              className="p-2 -mr-2"
              aria-label="Close menu"
            >
              <Image src={close} alt="" width={24} height={24} className="text-white" />
            </button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-3 text-lg text-white hover:text-decane-yellow transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-6 mt-auto border-t border-gray-700">
            <Link
              href="#"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-decane-yellow rounded-full font-figtree text-black hover:bg-decane-yellow/90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Download</span>
              <Image src={download} alt="" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Add padding to account for fixed header */}
      <div className="h-24 lg:h-32" />
    </>
  );
};

export default Header;
