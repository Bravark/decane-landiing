import React from 'react'

const WalletBuilder = () => {
    return (
        <div className='rounded-[40px] pt-20 pb-32 mx-4 lg:mx-4 xl:mx-72 flex flex-col items-center border inset-0 bg-gradient-to-br from-[#F6B605]/35 via-[#000000] to-[#F6B605]/35'>


            <h2 className='font-plusJakartaSans font-semibold text-[40px] max-sm:text-center text-white'>Ready to secure your Crypto?</h2>

            <p className='font-plusJakartaSans font-normal text-[16px] md:text-xl max-sm:text-center text-white mt-8'>
                Join thousands of users who trust Decane with their digital assets
            </p>

            <div className='bg-[#FFFFFF] text-black font-plusJakartaSans font-normal text-[14px] rounded-full px-7 py-3 mt-8 shadow-[0_0_15px_#FFBC05] hover:shadow-[0_0_20px_#FFBC05] transition-shadow duration-300"'>
                <p>Get Started Today</p>
            </div>

        </div>
    )
}

export default WalletBuilder