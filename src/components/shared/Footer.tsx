import React from 'react'
import Image from 'next/image'
import Layer from '@/images/layer.png'
import logo from '@/svgs/logo.svg'

const Footer = () => {
    return (
        <div className='bg-[linear-gradient(90deg,#0D0D0D_0%,#0D0D0D_55%,#0D0D0D_100%)] z-40 rounded-[40px] h-[500px] xl:mx-60 mx-12 relative overflow-auto mt-20 mb-14'>



            <div className="flex items-center gap-[0.38rem] flex-1 mt-6 ml-12">
                <Image src={logo} alt="logo" />

                <span className="font-viga text-[2.79294rem] text-decane-yellow">
                    Decane
                </span>
            </div>


            <div className='flex items-start justify-between mt-16 mx-7 xl:mx-14'>
                <div>
                    <h5 className='text-[#F4EBBC] font-tajawal text-xl font-bold'>Join the Herd</h5>
                    <p className='text-[#F4EBBC] font-tajawal text-xs font-light text-left max-w-80'>Become part of an evolving ecosystem of users and builders shaping the next era of Web3. Stay updated on releases, drops, and integrations.</p>
                </div>


                <div className='backdrop-blur-[16px] w-[500px] xl:w-[600px] xl:px-7 py-[18px] rounded border border-[#FEFEFE]  flex items-center justify-between'>
                    <input className=' lg:ml-4 xl:ml-0 text-white lg:text-xs xl:text-xl w-[400px] focus:border-0 focus:outline-none' type="text" placeholder='  Sign up for our newsletter and join the growing Decane community.' />

                    <div className='flex items-center justify-center gap-2 bg-black xl:py-3 xl:px-8 py-2 px-2 rounded-xl cursor-pointer lg:mr-4 xl:mr-0'>
                        <p className='font-tajawal font-normal text-white text-xs'>Sign Up</p>
                    </div>
                </div>
            </div>


            <ul className='mt-16 ml-7 xl:ml-14 flex flex-col gap-3'>
                <li className='text-[#FFFFFF] font-tajawal text-xs font-normal cursor-pointer hover:text-decane-yellow'>Wallet</li>
                <li className='text-[#FFFFFF] font-tajawal text-xs font-normal cursor-pointer hover:text-decane-yellow'>Features</li>
                <li className='text-[#FFFFFF] font-tajawal text-xs font-normal cursor-pointer hover:text-decane-yellow'>Builders</li>
                <li className='text-[#FFFFFF] font-tajawal text-xs font-normal cursor-pointer hover:text-decane-yellow'>Learn</li>
                <li className='text-[#FFFFFF] font-tajawal text-xs font-normal cursor-pointer hover:text-decane-yellow'>Community</li>
                <li className='text-[#FFFFFF] font-tajawal text-xs font-normal cursor-pointer hover:text-decane-yellow'>Support</li>
            </ul>



            <div className='ml-80 mr-6 flex items-center justify-between'>
                <p className='text-[#FFFFFF] font-tajawal text-xl font-medium'>© 2025 Decane.</p>


                <div className='flex items-center gap-8'>
                    <p className='text-[#FFFFFF] font-tajawal text-xl font-medium cursor-pointer hover:text-decane-yellow'>Terms</p>
                    <p className='text-[#FFFFFF] font-tajawal text-xl font-medium cursor-pointer hover:text-decane-yellow'>Privacy</p>
                    <p className='text-[#FFFFFF] font-tajawal text-xl font-medium cursor-pointer hover:text-decane-yellow'>Security</p>
                    <p className='text-[#FFFFFF] font-tajawal text-xl font-medium cursor-pointer hover:text-decane-yellow'>Contact</p>
                </div>
            </div>

            <Image src={Layer} alt="layer" className='absolute top-0 right-0 opacity-10 -z-30' />
        </div>
    )
}

export default Footer