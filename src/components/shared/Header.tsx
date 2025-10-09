import logo from '@/svgs/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import download from '@/images/download.gif';

const Header = () => {
  return (
    <nav className="bg-navbar-bg backdrop-blur-[16.75px] py-[1.875rem] fixed top-0 z-10 w-full">
      <div className="wrapper flex items-center justify-between gap-[6.18494rem]">
        <div className="flex items-center gap-[0.38rem] flex-1">
          <Image src={logo} alt="logo" />

          <span className="font-viga text-[2.79294rem] text-decane-yellow">
            Decane
          </span>
        </div>

        <ul className="flex items-center justify-center gap-[2.5rem] flex-2 py-[1.625rem] px-16 bg-navlinks-bg rounded-[19rem] text-white font-tajawal">
          <li>
            <Link
              href="#"
              className="py-[0.375rem] px-4 text-base tracking-[0.01rem]"
            >
              Wallet
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="py-[0.375rem] px-4 text-base tracking-[0.01rem]"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="py-[0.375rem] px-4 text-base tracking-[0.01rem]"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="py-[0.375rem] px-4 text-base tracking-[0.01rem]"
            >
              Community
            </Link>
          </li>
        </ul>

        <div className="flex-1 flex items-center justify-end">
          <Link
            href={'#'}
            className="inline-flex items-center gap-[0.63rem] py-[1.59rem] px-[3.19rem] bg-decane-yellow rounded-[2.8125rem] h-[4.375rem] font-figtree"
          >
            <span className="tracking-[0.01rem]">Download</span>
            <Image src={download} alt="download" className="w-[1.74044rem]" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
