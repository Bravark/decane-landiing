import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layer from '@/images/layer.png'
import logo from '@/svgs/logo.svg'

const Footer = () => {
    return (
        <div className='bg-gradient-to-br from-[#000000] via-[#000000]/50 to-transparent z-40 rounded-[40px] min-h-[500px] xl:h-[500px] xl:mx-70 mx-4 md:mx-8 lg:mx-4 relative overflow-hidden mt-10 md:mt-16 lg:mt-20 mb-10 md:mb-10 lg:mb-14 px-4 sm:px-6 md:px-8 lg:px-0 xl:px-0'>
            <div className="flex items-center gap-2 sm:gap-[0.38rem] mt-6 sm:mt-8 md:mt-6 sm:ml-4 md:ml-8 lg:ml-12">
                <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 relative'>
                    <Image src={logo} alt="logo" layout='fill' objectFit='contain' />
                </div>
                <span className="font-viga text-2xl sm:text-3xl md:text-4xl text-decane-yellow">
                    Decane
                </span>
            </div>

            <div className='flex flex-col lg:flex-row items-start justify-between mt-8 sm:mt-12 lg:mt-16 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-14 gap-6 lg:gap-0'>
                <div className='max-w-full sm:max-w-md lg:max-w-[22rem] xl:max-w-md'>
                    <h5 className='text-[#F4EBBC] font-tajawal text-lg sm:text-xl font-bold'>Join the Herd</h5>
                    <p className='text-[#F4EBBC] font-tajawal text-xs sm:text-sm font-light text-left mt-2'>
                        Become part of an evolving ecosystem of users and builders shaping the next era of Web3. Stay updated on releases, drops, and integrations.
                    </p>
                </div>


            </div>

            <div className='mt-8 sm:mt-12 lg:mt-5 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-14'>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:flex lg:flex-col gap-3 sm:gap-4'>
                    {[
                        { text: 'Wallet', href: 'https://chromewebstore.google.com/detail/decane-wallet/ogphcpbegajkgjdfdlibiokeafdndbfo' },
                        // { text: 'Features', href: '/' },
                        { text: 'Community', href: 'https://discord.gg/WBtGdKFdmy' },
                        // { text: 'Support', href: '/' }
                    ].map(({ text, href }) => (
                        <li key={text}>
                            <Link
                                href={href}
                                className='text-white font-tajawal text-xs sm:text-sm font-normal cursor-pointer hover:text-decane-yellow transition-colors block'
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='mt-30 sm:mt-22 lg:mt-16 mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-14 lg:absolute lg:bottom-0 lg:right-0'>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 lg:gap-40'>
                    <p className='text-white font-tajawal text-base sm:text-lg md:text-xl font-medium'>
                        © Decane 2025
                    </p>
                    <div className='flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8'>
                        {['Terms & Privacy', 'Contact'].map((item) => (
                                item === 'Terms & Privacy' ? (
                                    <Link
                                        key={item}
                                        href="/privacy"
                                        className='text-white font-tajawal text-base sm:text-lg md:text-xl font-medium cursor-pointer hover:text-decane-yellow transition-colors'
                                    >
                                        {item}
                                    </Link>
                                ) : (
                                    <Link
                                        key={item}
                                        href="/contact"
                                        className='text-white font-tajawal text-base sm:text-lg md:text-xl font-medium cursor-pointer hover:text-decane-yellow transition-colors'
                                    >
                                        {item}
                                    </Link>
                                )
                            
                        ))}
                    </div>
                </div>
            </div>

            <Image
                src={Layer}
                alt="layer"
                className='absolute top-0 left-0 md:left-5/7 opacity-10 -z-30 object-cover h-full'
            />
        </div>
    )
}
export default Footer