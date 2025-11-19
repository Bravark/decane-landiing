import React from 'react'
import FeaturedCard from '../FeatureCard/FeaturedCard'
import Image from 'next/image'
import swapIcon from '@/svgs/swap.svg'
import headphoneIcon from '@/svgs/headphone.svg'
import discountIcon from '@/svgs/discount.svg'
import flashIcon from '@/svgs/flash.svg'

const WhyDecane = () => {
    return (
        <div className='z-40 flex flex-col items-center justify-center text-center mt-[600px] md:mt-[700px] lg:mt-[900px] xl:mt-[1400px] mx-5'>
            <h3 className='text-3xl md:text-4xl xl:text-5xl font-plusJakartaSans font-normal text-white mb-10'>Key Features</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
                <FeaturedCard
                    icon={<Image src={swapIcon} alt="Swap" width={32} height={32} />}
                    header='Multi-Currency Support'
                    description='Support for 500+ cryptocurrencies and tokens. Manage all your digital assets in one secure place.'
                />

                <FeaturedCard
                    icon={<Image src={flashIcon} alt="Flash" width={32} height={32} />}
                    header='Instant Transactions'
                    description='Lightning-fast transaction processing with real-time updates and confirmation tracking.'
                />

                <FeaturedCard
                    icon={<Image src={discountIcon} alt="Discount" width={32} height={32} />}
                    header='Low fees'
                    description='Industry-leading low transaction fees with transparent pricing and no hidden charges.'
                />

                <FeaturedCard
                    icon={<Image src={headphoneIcon} alt="Support" width={32} height={32} />}
                    header='24/7 Support'
                    description='Round-the-clock customer support team ready to assist with any questions or issues.'
                />
            </div>
        </div>
    )
}

export default WhyDecane