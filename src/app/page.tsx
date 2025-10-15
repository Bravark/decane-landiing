import { Header } from '@/components';
import Banner from '@/components/shared/Banner';
import WalletIntro from '@/components/shared/WalletIntro';
import WalletUi from '@/components/shared/WalletUi';
import Image from 'next/image';
import WalletEnergy from '@/images/wallet-energy.png';
import WhyDecane from '@/components/shared/WhyDecane';
import DecanePecks from '@/images/decane-pecks.png';
import HowItWorks from '@/components/shared/HowItWorks';
import WalletBuilder from '@/components/shared/WalletBuilder';
import Footer from '@/components/shared/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div className='mt-5 lg:mt-5'>
        <Banner />
        <WalletIntro />
        <WalletUi />
        <div className='flex justify-center items-center'>
          <Image src={WalletEnergy} alt="wallet-energy" className='mt-30 md:mt-60 lg:w-[900px] xl:w-[1200px]' />
        </div>
        <WhyDecane />
        <div className='flex justify-center items-center'>
          <Image src={DecanePecks} alt="decane-pecks" className='mt-4 w-[900px] xl:w-[1200px]' />
        </div>
        <HowItWorks />
        <WalletBuilder />
        <Footer />
      </div>
    </>
  );
}
