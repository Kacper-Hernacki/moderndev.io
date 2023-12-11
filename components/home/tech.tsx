"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInVariants, slideInFromLeft } from "@/utils";
import { technologies } from "@/components/home/technologies";
import Image, { StaticImageData } from "next/image";

interface SingleTechProps {
  techLogo: StaticImageData;
}

const Technology: React.FC<SingleTechProps> = ({ techLogo }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Image src={techLogo} alt="Tech" width={50} height={50} layout="responsive" />

  );
};

const Technologies = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-2">

      {technologies?.map((tech, index) => (
        <div key={index} className="w-12">
          <Technology techLogo={tech?.image} />
        </div>
      ))}

    </div>
  );
};

export const TechHome: React.FC<{ header: string }> = ({ header }) => {
  return (
    <motion.div
      className="hero min-h-screen"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideInFromLeft}>
          {/* Responsive header size */}
          <h3 className="mb-10 text-5xl md:text-6xl lg:text-7xl font-bold text-center">{header}</h3>
          <Technologies />
        </motion.div>
      </div>
    </motion.div>
  );
};
