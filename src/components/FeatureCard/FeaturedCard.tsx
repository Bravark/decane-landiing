import React from 'react';

interface FeaturedCardProps {
    icon: React.ReactNode;
    header: string;
    description: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ icon, header, description }) => {
    return (
        <div className='relative border-[#FFFFFF54] border-2 rounded-[40px] p-6 overflow-hidden h-56'>
            <div className='absolute inset-0 bg-gradient-to-br from-[#F6B605]/35 via-[#000000] to-[#000000]' />
            <div className='relative z-10 h-full flex flex-col'>

                <div className='mb-4'>
                    {icon}
                </div>

                <h5 className='text-white font-semibold font-plusJakartaSans text-[16px] text-left mb-3'>{header}</h5>
                <p className='font-plusJakartaSans font-normal text-[14px] text-gray-300 flex-grow text-left mt-6'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default FeaturedCard