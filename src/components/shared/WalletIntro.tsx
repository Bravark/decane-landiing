import React from 'react'

const WalletIntro = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center mt-20 md:mt-72 mx-10 xl:mx-96'>
            <h3 className='text-2xl md:text-4xl xl:text-5xl font-tajawal font-normal text-black mb-10'>Decane Wallet.</h3>
            <p className='text-[24px] md:text-[32px] xl:text-[46px] font-tajawal font-bold text-black'>
                The self-custody wallet for the new age of Web3.
                <span className='font-rouge-script font-normal'>
                    Trade tokens, collect NFTs
                </span>, explore DeFi — all powered by your keys.
            </p>
        </div>
    )
}

export default WalletIntro