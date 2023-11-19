import React from "react";
import { Icons } from "@/components/icons";

const LandingFooter = () => {
  return (
    <div>
    <div className="w-[100%]  h-[480px] justify-center flex bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-600/25 from-0% to-black to-70% items--center">
      <div className="flex mt-[-100px] justify-center  w-max[1200px] items-center gap-[7.5rem]">
      <div className="flex-col w-[302px] h-[221px] gap-8 inline-flex ">
        <div className="flex items-start gap-2 text-center md:text-center lg:text-left">
          <h1 className="flex flex-col font-extrabold text-[rgb(255,84,0)] text-[22px] text-center md:text-center lg:text-left">
            YI
          </h1>
          <p className="flex flex-col font-medium text-white text-[22px] text-center md:text-center lg:text-left">
            Youth Icon
          </p>
        </div>
        <div className="w-[302px] text-slate-300 text-opacity-60 text-base font-medium font-manrope">
          Giving developers the power to connect with inspiring developers by
          sharing their projects and skills.
        </div>
        <div className="w-[171px] h-6 justify-center items-center gap-3 inline-flex">
          <a href="https://l.hellofaizan.me/discord" className=" relative group">
            <div className="m-[-5px] absolute inset-0  bg-gray-600 rounded-lg shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-30 transition duration-200"/>
            <Icons.discord className="w-6 h-6 relative" />
          </a>
          <div className="w-px h-6 bg-neutral-400 bg-opacity-50" />
          <a href="https://twitter.com/imayouthicon" className=" relative group">
            <div className="m-[-5px] absolute inset-0  bg-gray-600 rounded-lg shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-30 transition duration-200"/>
            <Icons.twitter2 className="w-6 h-6 relative" />
          </a>
          <div className="w-px h-6 bg-neutral-400 bg-opacity-50" />
          <div className="w-6 h-6 p-[3px] justify-center items-center flex">
            <a href="https://github.com/Youth-Icon/xprofile" className=" relative group">
              <div className="m-[-5px] absolute inset-0  bg-gray-600 rounded-lg shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-30 transition duration-200"/>

              <Icons.linkedin className="w-[18px] h-[18px] relative flex-col justify-start items-start flex" />
            </a>
          </div>
          <div className="w-px h-6 bg-neutral-400 bg-opacity-50" />
          <a href="https://github.com/Youth-Icon/xprofile" className=" relative group">
            <div className="m-[-5px] absolute inset-0  bg-gray-600 rounded-lg shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-30 transition duration-200"/>
            <Icons.telegram className="w-[18px] h-[18px] relative flex-col justify-start items-start flex"/>
          </a>
        </div>
      </div>
      <div className="h-[221px] justify-start items-start gap-[68px] inline-flex">
        <div className="pr-[37px] flex-col justify-center items-start gap-6 inline-flex">
          <div className="text-white text-base font-semibold font-manrope">
            Features
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white">
              Showcase
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white">
              Social Links
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white">
              Personalization
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white">
              Profile Themes
            </div>
            <div className="w-[113px] text-slate-300 text-opacity-60 text-sm font-medium font-manrope">
              API
            </div>
          </div>
        </div>
        <div className="pr-[68px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-white text-base font-semibold font-manrope">
            Resources
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white">
              Showcases
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white">
              <a href="https://github.com/Youth-Icon/xprofile">GitHub</a>
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white">
              Community
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white">
              Help Center
            </div>
          </div>
        </div>
        <div className="pr-px flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-white text-base font-semibold font-manrope">
            About Youth Icon
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white">
              xProfile + Youth Icon
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white">
              Open-source Software
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white">
              <a href="https://github.com/Youth-Icon/xprofile">GitHub</a>
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white">
              <a href="https://twitter.com/imayouthicon">Twitter</a>
            </div>
          </div>
        </div>
        <div className="w-[150px] pr-[102px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-white text-base font-semibold font-manrope">
            Legal
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white">
              Privacy
            </div>
            <div className="text-slate-300 text-opacity-60 text-sm font-medium font-manrope cursor-pointer hover:text-white">
              Terms
            </div>
          </div>
        </div>
      </div>
      </div>

      
      
      </div>
      <div className="pb-5 mt-[-150px]">
        <div className="flex justify-center items-center">
      <div className="w-[calc(100%-240px)] h-[0px] border border-stone-300 border-opacity-20"></div>
      </div>
      <div className="pl-[120px] mt-5 text-slate-300 text-opacity-60 text-sm font-medium font-manrope">
        © 2023 youthicon, org{" "}
      </div>
      </div>

    </div>
  );
};

export default LandingFooter;
