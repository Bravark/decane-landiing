import React from 'react';
import Image from 'next/image';
import Download from '@/images/download.png'
import Create from '@/images/create.png'
import Wallet from '@/images/wallet.png'

const HowItWorks = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-10 xl:mx-[150px] mb-10 md:mb-40'>
      <h3 className='text-4xl xl:text-5xl font-plusJakartaSans font-normal text-white mb-16'>How it Works</h3>

      <div className='flex flex-col md:flex-wrap md:justify-center md:gap-10 lg:flex-nowrap md:flex-row justify-center items-center lg:justify-between'>
        <div>
          <Image src={Download} alt='Download' className='h-80'/>

          <div>
            <h4 className='text-white font-plusJakartaSans text-2xl max-sm:text-center'>Download Decane</h4>
            <p className='font-plusJakartaSans text-white text-[14px] max-sm:text-center'>Available on mobile and browser version.</p>
          </div>
        </div>

        <div>
          <Image src={Create} alt='Create' className='h-80' />

          <div>
            <h4 className='text-white font-plusJakartaSans text-2xl max-sm:text-center'>Create or Import Walet</h4>
            <p className='font-plusJakartaSans text-white text-[14px] max-sm:text-center'>Your keys, your control</p>
          </div>
        </div>

        <div>
          <Image src={Wallet} alt='Wallet' className='h-80'/>

          <div>
            <h4 className='text-white font-plusJakartaSans text-2xl max-sm:text-center'>Connect to web3</h4>
            <p className='font-plusJakartaSans text-white text-[14px] max-sm:text-center'>Trade, collect, and explore.</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default HowItWorks