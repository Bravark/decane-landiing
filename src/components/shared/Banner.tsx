import React from 'react'
import Image from 'next/image'
import DecaneEclipse from '@/svgs/decane-eclipse.svg';
import DecaneRad from '@/svgs/radiation.svg';


const Banner = () => {
    return (
        <div className='relative'>
            <div className='z-50 absolute  xl:bottom-[-400px] md:left-[7%] lg:left-[20%] xl:left-[30%] flex flex-col items-center'>
                <div className="flex items-center gap-2 bg-navlinks-bg rounded-full px-6 py-2 text-white text-[15px]">
                    Welcome to Decane
                </div>

                <h1 className='max-sm:text-center z-[999px] font-plusJakartaSans text-[#FFFFFF] text-3xl lg:text-4xl xl:text-5xl font-semibold my-7'>Secure Your Crypto Future</h1>
                <p className='max-sm:text-center font-plusJakartaSans font-normal text-[#FFFFFF] text-[15px]'>The most trusted crypto currency wallet for managing your digital assets with confidence and ease</p>


                <div className='border border-[#FFFFFF] rounded-full p-2 flex items-center gap-2 mt-16'>
                    <input type="text" placeholder='Enter your email address' className='max-[325px]:w-32 w-[200px] md:w-64 lg:w-96 ml-6 bg-transparent text-white focus:outline-none focus:ring-0 focus:border-transparent' />
                    <button className='bg-[#FFBC05] text-[#000000] font-plusJakartaSans font-semibold text-[15px] rounded-full px-6 py-2'>Subscribe</button>
                </div>


                <div className="font-plusJakartaSans mt-8 flex items-center gap-2 bg-[#FFBC05] rounded-full px-6 py-2 font-semibold text-[15px] text-black">
                    Launch Wallet
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <Image src={DecaneEclipse} alt="decane-eclipse" className='hidden md:block absolute bottom-[-200px] md:bottom-[-400px]  lg:bottom-[-500px] xl:bottom-[-650px] w-[2000px]' />
                <Image src={DecaneRad} alt="decane-eclipse" className='hidden md:block absolute top-[180px] md:top-[140px] lg:top-[100px] w-[2000px] -z-30' />
            </div>
        </div>
    )
}

export default Banner