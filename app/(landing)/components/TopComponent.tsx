import React from 'react';
import CTAbtn from './CTAbtn';
import { getServerAuthSession } from '@/backend/auth';

const TopComponent = async ({ }) => {
    const session = await getServerAuthSession();
    return (
        <div className="mt-[8.5rem] flex justify-center items-center bg-cover bg-no-repeat">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center flex flex-col w-full h-full">
                    <span className="text-white text-6xl sm:text-6xl lg:text-[95px] font-bold font-manrope leading-tight">One Link with</span>
                    <span className="bg-gradient-to-r from-[#FF5400] via-[#FF5400] to-[#FF0054] text-transparent bg-clip-text text-6xl sm:text-6xl lg:text-8xl font-bold font-manrope ">Superpowers</span>
                </div>
                <div className='flex flex-col space-y-3 justify-center items-center'>
                    <div className="text-center max-w-3xl text-stone-400 text-base px-4 sm:text-lg lg:text-xl mt-4 sm:mt-6 lg:mt-12 font-medium font-manrope leading-snug">xProfile is an open-source app that provides a one-link portfolio for showcasing your projects, skills, social links, and more.</div>
                    <CTAbtn session={session} />
                </div>
            </div>
        </div>
    );
};

export default TopComponent;