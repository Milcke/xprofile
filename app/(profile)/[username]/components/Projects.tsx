import React, { CSSProperties } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import { Bell, Upload } from "lucide-react";
import Image from 'next/image';
import Project from "./Project";


const Projects = () => {
  

  return (
    <div className="">
      <div className="flex ">
      <Project displayType="project" style={{background: "linear-gradient(to left, rgba(70, 6, 6, 0.1), rgba(233, 30, 99, 0.1))", borderRadius:"30px", marginRight:"32px"}}></Project>
      <Project displayType="project" style={{background: "linear-gradient(to top, rgba(70, 6, 6, 0.1), rgba(233, 30, 99, 0.1))", borderRadius:"30px"}}></Project>
      </div>
      <div className="flex  my-[32px]">
      <Project displayType="add" style={{background: "linear-gradient(to right, rgba(70, 6, 6, 0.1), rgba(233, 30, 99, 0.1))", borderRadius:"30px", marginRight:"32px"}}></Project>
      <Project displayType="blank" style={{background: "linear-gradient(to bottom, rgba(70, 6, 6, 0.1), rgba(233, 30, 99, 0.1))", borderRadius:"30px"}}></Project>
      </div>
    </div>
  );
};

export default Projects;


