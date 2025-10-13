import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layer from '@/images/layer.png'
import logo from '@/svgs/logo.svg'

const Footer = () => {
    return (
        <div className='bg-[linear-gradient(90deg,#0D0D0D_0%,#0D0D0D_55%,#0D0D0D_100%)] z-40 rounded-[40px] min-h-[500px] xl:h-[500px] xl:mx-70 mx-4 md:mx-8 lg:mx-4 relative overflow-hidden mt-10 md:mt-16 lg:mt-20 mb-10 md:mb-10 lg:mb-14 px-4 sm:px-6 md:px-8 lg:px-0 xl:px-0'>
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

                <div className='backdrop-blur-[16px] w-full lg:w-[500px] xl:w-[700px] px-3 sm:px-4 lg:px-7 py-3 sm:py-4 rounded border border-[#FEFEFE] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4'>
                    <input
                        className='w-full bg-transparent text-white text-sm sm:text-base lg:text-lg xl:text-xl focus:border-0 focus:outline-none placeholder:text-xs sm:placeholder:text-sm lg:placeholder:text-base'
                        type="text"
                        placeholder='Sign up for our newsletter and join the growing Decane community.'
                    />
                    <div className='flex items-center justify-center bg-black py-2 px-4 sm:py-2 sm:px-4 md:py-2.5 md:px-6 lg:py-3 lg:px-8 rounded-xl cursor-pointer whitespace-nowrap'>
                        <p className='font-tajawal font-normal text-white text-xs sm:text-sm'>Sign Up</p>
                    </div>
                </div>
            </div>

            <div className='mt-8 sm:mt-12 lg:mt-5 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-14'>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:flex lg:flex-col gap-3 sm:gap-4'>
                    {['Wallet', 'Features', 'Builders', 'Learn', 'Community', 'Support'].map((item) => (
                        <li
                            key={item}
                            className='text-white font-tajawal text-xs sm:text-sm font-normal cursor-pointer hover:text-decane-yellow transition-colors'
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='mt-8 sm:mt-12 lg:mt-16 mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-14 lg:absolute lg:bottom-0 lg:right-0'>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 lg:gap-40'>
                    <p className='text-white font-tajawal text-base sm:text-lg md:text-xl font-medium'>
                        © Decane 2025
                    </p>
                    <div className='flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8'>
                        {['Terms & Privacy', 'Security', 'Contact'].map((item) => (
                                item === 'Terms & Privacy' ? (
                                    <Link
                                        key={item}
                                        href="/privacy"
                                        className='text-white font-tajawal text-base sm:text-lg md:text-xl font-medium cursor-pointer hover:text-decane-yellow transition-colors'
                                    >
                                        {item}
                                    </Link>
                                ) : (
                                    <p
                                        key={item}
                                        className='text-white font-tajawal text-base sm:text-lg md:text-xl font-medium cursor-pointer hover:text-decane-yellow transition-colors'
                                    >
                                        {item}
                                    </p>
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