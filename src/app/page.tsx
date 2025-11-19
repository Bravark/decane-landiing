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
      <Banner />
      <WhyDecane />
      <WalletUi />
      <HowItWorks />
      <WalletBuilder />
      <Footer />

    </>
  );
}
