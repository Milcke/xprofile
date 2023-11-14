<<<<<<< Updated upstream
import React from 'react'
import { getServerAuthSession } from "@/backend/auth";
import { redirect } from 'next/navigation';
import Header from './components/Header';
import Projects from './components/Projects';
import FeatureBox from '@/app/(landing)/components/FeatureBox';
import ProfileSidebar from './components/ProfileSidebar';



=======
import React from "react";
import { getServerAuthSession } from "@/backend/auth";
import { redirect } from "next/navigation";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ProfileSidebar from "./components/ProfileSidebar";
import Skills from "./components/Skills";
import Tags from "./components/Tags";
import Achievements from "./components/Achievements";
>>>>>>> Stashed changes

export default async function page() {
  const session = await getServerAuthSession();
  // console.log(session)

  return (
<<<<<<< Updated upstream
    <div>
      <div className='mx-[48px] mt-[24px]'>
        {/* Header Component */}
        <Header />
      </div>
      <div className="flex mx-[48px] mt-[32px]">
=======
    <div className="px-12">
      {/* Header Component */}
      <div className="mb-[32px]">
        <Header />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "32px",
        }}
      >
>>>>>>> Stashed changes
        <div>
          {/* Header Component */}
          <Projects />
<<<<<<< Updated upstream
=======

          {/* Nested grid for Skills and Tags */}
          <div className="w-full flex gap-[32px]">
            <Skills />
            <Tags />
          </div>
          <div className="mt-[32px]">
          <Achievements />
          </div>
>>>>>>> Stashed changes
        </div>
        <div>
          <ProfileSidebar />
        </div>
      </div>

    </div>
<<<<<<< Updated upstream

  )
};
=======
  );
}
>>>>>>> Stashed changes
