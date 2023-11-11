
import React from 'react'
import { getServerAuthSession } from "@/backend/auth";
import LandingNav from '@/components/LandingNav';
import Image from "next/legacy/image";
import HeroSection from './components/HeroSection';
import JoinSection from './components/JoinSection';
import LandingFooter from './components/LandingFooter';
import InfoRow from './components/InfoRow';
import Proudly from './components/Proudly';
import HappyUsers from './components/HappyUsers';
import Testimonials from './components/Testimonials';
import CardRowSection from './components/CardRowSection';


export default async function page() {
  const session = await getServerAuthSession();
  // console.log(session)
  return (
    <>
      <div className='main min-h-screen'>
        {/* cover backgound image */}
        <HeroSection />
      </div>
      <div>
        {/* Happy Users Section */}
        <CardRowSection/>
      </div>
      <div>
        {/* Happy Users Section */}
        <HappyUsers/>
      </div>
      <div>
        {/* Testimonials Section */}
        <Testimonials/>
      </div>
      <div>
        {/* Proudly Section */}
        <Proudly/>
      </div>
      <div>
        {/* Info Section */}
        <InfoRow/>
      </div>
      <div >
        {/* Join up Section */}
        <JoinSection />
      </div>
      <div >
        {/* Footer*/}
        <LandingFooter />
      </div>
    </>
  )
}

