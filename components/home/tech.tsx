"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInVariants, slideInFromLeft } from "@/utils";
import { technologies } from "@/components/home/technologies";
import Image, { StaticImageData } from "next/image";

interface SingleTechProps {
  techLogo: StaticImageData;
}

const Technology: React.FC<SingleTechProps> = ({ techLogo }) => {
  return (
    <div className="hexagon">
      <Image src={techLogo} alt="Tech" width={90} height={90}/>
    </div>
  );
};

const Technologies = () => {
  return (
    <div className="technologies-container flex flex-wrap justify-center">
      {technologies?.map((tech, index) => (
        <div key={index} className={`cursor-pointer hexagon m-1  ${index > 23 ? '-translate-y-6' : ''} ${index < 12 ? 'translate-y-6' : ''} ${index > 11 ? 'translate-x-12' : ''}`}>
          <Technology  techLogo={tech?.image} />
        </div>
      ))}
    </div>
  );
};


export const TechHome: React.FC<{ header: string }> = ({ header }) => {
  return (
    <motion.div
      className="hero h-screen"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInFromLeft}>
          <h3 className="mb-20 text-7xl font-bold text-center">{header}</h3>
          <Technologies />
        </motion.div>
      </div>
    </motion.div>
  );
};
