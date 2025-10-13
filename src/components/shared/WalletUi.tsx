import React from 'react'
import Image from 'next/image'
import WalletUI from '@/images/wallet-ui.png'

const WalletUi = () => {
    return (
        <div className='flex justify-center mt-20 md:mt-52 relative'>
            <Image src={WalletUI} alt="wallet-ui"  className='max-[800px]:w-[380px] max-[1300px]:w-[450px]' />
            <h4 className='font-tajawal font-normal text-black text-3xl xl:text-4xl absolute max-[500px]:top-1/5 top-1/3 right-1/3 max-w-5'>
                <span className='font-rouge-script text-4xl xl:text-5xl mr-3'>your</span>trusted companion
            </h4>


            <h4 className='font-tajawal font-normal text-black text-3xl xl:text-4xl absolute top-[45%] left-10 xl:left-1/6 max-w-5 max-[500px]:hidden'>
                The
                <span className='font-rouge-script text-4xl xl:text-5xl mx-2'>everything</span>wallet
            </h4>

            <h4 className='font-tajawal font-normal text-black text-3xl xl:text-4xl absolute bottom-1/5 max-[500px]:right-[70%] max-[500px]:bottom-[0] max-[800px]:right-[29%] right-[30%] max-w-5'>
                The
                <span className='font-rouge-script text-4xl xl:text-5xl mx-2'>everything</span>wallet
            </h4>
        </div>
    )
}

export default WalletUi