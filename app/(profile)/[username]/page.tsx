import React from 'react';
import { getServerAuthSession } from "@/backend/auth";
import { redirect } from 'next/navigation';
import Header from './components/Header';
import Projects from './components/Projects';
import ProfileSidebar from './components/ProfileSidebar';
import Skills from './components/Skills';
import Tags from './components/Tags';

export default async function page() {
  const session = await getServerAuthSession();

  return (
    <div className='px-12'>
      {/* Header Component */}
      <div className='mb-[32px]'>
        <Header />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '32px' }}>
        <div>
          {/* Projects Component */}
          <Projects />
          
          {/* Nested grid for Skills and Tags */}
          <div className="w-full flex gap-[32px]">
            <Skills />
            <Tags />
          </div>

          


        </div>

        <div>
          {/* Profile Sidebar Component */}
          <ProfileSidebar />
        </div>
      </div>
    </div>
  );
};
