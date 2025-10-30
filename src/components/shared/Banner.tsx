import React from 'react'
import Image from 'next/image'
import Decane from '@/images/decane-peg.png'
import download from '@/images/download.gif';
import Link from 'next/link'


const Banner = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='font-russo-one text-black text-6xl lg:text-8xl text-center lg:mb-10 mb-5 md:mb-0'>
                Own <span className='text-[#D5B300] font-rouge-script text-[116.1px]'>your
                </span> Flow</h1>

            <div className='relative'>
                <Image src={Decane} alt="penguin" className='-mt-20 lg:-mt-[15rem]' />
            </div>


            <div className="flex-1 flex items-center justify-end mt-28">
                <Link
                    href={'#'}
                    className="inline-flex justify-center items-center gap-[0.63rem] py-4 w-[300px] md:w-[624px] bg-decane-yellow rounded-[2.8125rem] font-figtree"
                >
                    <span className="tracking-[0.01rem]">Download</span>
                    <Image src={download} alt="download" className="w-[1.74044rem]" />
                </Link>
            </div>
        </div>
    )
}

export default Banner