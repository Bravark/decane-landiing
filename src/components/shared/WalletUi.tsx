import React from 'react'
import Image from 'next/image'
import WalletUI from '@/images/wallet-ui.png'

const WalletUi = () => {
    return (
        <div className='flex justify-center mt-52 relative'>
            <Image src={WalletUI} alt="wallet-ui"  className='max-[1300px]:w-[500px]' />
            <h4 className='font-tajawal font-normal text-black text-4xl absolute top-1/3 right-1/3 max-w-5'>
                <span className='font-rouge-script text-5xl mr-3'>your</span>trusted companion
            </h4>


            <h4 className='font-tajawal font-normal text-black text-4xl absolute top-[45%] left-10 xl:left-1/6 max-w-5'>
                The
                <span className='font-rouge-script text-5xl mx-2'>everything</span>wallet
            </h4>

            <h4 className='font-tajawal font-normal text-black text-4xl absolute bottom-1/5 right-[30%] max-w-5'>
                The
                <span className='font-rouge-script text-5xl mx-2'>everything</span>wallet
            </h4>
        </div>
    )
}

export default WalletUi