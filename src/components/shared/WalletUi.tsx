import React from 'react'
import Image from 'next/image'
import WalletUI from '@/images/wallet-ui.png'

const WalletUi = () => {
    return (
        <div className='flex justify-center mt-10 lg:mt-28 xl:mt-32 relative'>
            <Image src={WalletUI} alt="wallet-ui"  className='' />
        </div>
    )
}

export default WalletUi