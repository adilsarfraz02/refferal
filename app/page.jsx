import { SimpleFooter } from '@/components/Footer';
import Navbar from '@/components/Header';
import HeroSection from '@/sections/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SimpleFooter />
    </>
  );
}
