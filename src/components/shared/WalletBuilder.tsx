import React from 'react'
import DecaneArrow from '@/images/decane-arrow.png'
import Image from 'next/image'
import Doc from "@/images/document.png"
import ChevRight from "@/images/chevron-right.png"

const WalletBuilder = () => {
    return (
        <div className='bg-[#7CC5F7] rounded-[40px] h-[400px] md:h-[480px] lg:h-[568px] mx-4 lg:mx-4 xl:mx-72 relative overflow-hidden'>

            <Image src={DecaneArrow} alt="decane-arrow" className='absolute left-10 bottom-0' />
            <h1 className='font-tajawal font-black text-[#09568B] text-4xl md:text-6xl lg:text-8xl absolute max-w-[200px] md:max-w-[300px] lg:max-w-[550px] top-30 md:top-25 lg:top-16 left-5 md:left-14'>Built for Builders, Designed for Growth</h1>
            <p className='font-tajawal font-normal text-black text-[14px] md:text-xl absolute max-w-[210px] md:max-w-[250px] top-[40%] right-5 md:right-14 text-right'>Decane provides open APIs, SDKs, and documentation for developers who want to integrate, extend, or build on top of the wallet infrastructure.</p>


            <div className='flex items-center justify-center gap-2 w-3xs bg-black py-5 px-4 rounded-xl cursor-pointer absolute bottom-9 right-1/5 md:right-14'>
                <Image src={Doc} alt="document" className='mt-2'/>
                <p className='font-tajawal font-normal text-white text-xl'>View Docs</p>
                <Image src={ChevRight} alt="chevron-right" />
            </div>
        </div>
    )
}

export default WalletBuilder