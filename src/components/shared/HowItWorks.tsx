import React from 'react';
import DecaneDownload from '@/images/decane-download.png';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-10 xl:mx-[400px] mb-10 md:mb-40'>
         <h3 className='text-4xl xl:text-5xl font-tajawal font-normal text-gray-600 mb-4'>How it Works</h3>
         <h2 className='font-tajawal font-normal text-black text-5xl md:text-7xl xl:text-8xl'>Start in <span className='font-rouge-script'>Minutes</span></h2>
         <Image src={DecaneDownload} alt="decane-download" />
    </div>
  )
}

export default HowItWorks