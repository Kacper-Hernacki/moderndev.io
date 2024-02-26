"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LaptopAutomations from "@/public/laptops/1.png";
import LaptopNotion from "@/public/laptops/3.png";
import LaptopCron from "@/public/laptops/2.png";
import LaptopAi from "@/public/laptops/4.png";
import LaptopWebstorm from "@/public/laptops/5.png";
import LaptopCanva from "@/public/laptops/6.png";
import MakeLogo from "@/public/technologies/27.png";
import NotionLogo from "@/public/technologies/28.png";
import CronLogo from "@/public/technologies/30.png";
import AiLogo from "@/public/technologies/29.png";
import WebstormLogo from "@/public/technologies/31.png";
import CanvaLogo from "@/public/technologies/23.png";
import { fadeInVariants, slideInFromLeft } from "@/utils";

export const ChoiceSection = () => {
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
    <motion.div
      className="w-screen h-auto p-5 lg:p-10 max-w-7xl"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInFromLeft}>
        <h3 className="mb-12 lg:mb-24 text-5xl lg:text-7xl font-bold text-center">
          <span className="gradient-span">Your choice</span> 🎯
        </h3>

        <div className="flex flex-col w-full lg:flex-row justify-center">
          <div className="flex-col">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-16 text-center">✅ Modern</h2>
            <div className="flex">
              <div className="flex-col max-w-sm">
                <div className="flex-col">
                  <Image width={!isMobile ? 300 : 150} src={LaptopAutomations} alt="Album" />
                  <div className="flex">
                    <Image className="object-contain mr-1" width={!isMobile ? 70 : 35} src={MakeLogo} alt="make.com logo" />
                    <h2 className="text-md lg:card-title">Automate tasks with make.com platform</h2>
                  </div>
                </div>
              </div>
              <div className="flex-col max-w-sm">
                <Image width={!isMobile ? 300 : 150} src={LaptopNotion} alt="Album" />
                <div className="flex">
                  <Image className="object-contain" width={!isMobile ? 70 : 35} src={NotionLogo} alt="notion logo" />
                  <h2 className="text-md lg:card-title">Save data & Plan tasks with Notion</h2>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mt-8 flex-col max-w-sm">
                <Image width={!isMobile ? 300 : 150} src={LaptopCron} alt="Album" />
                <div className="flex">
                  <Image className="object-contain" width={!isMobile ? 70 : 35} src={CronLogo} alt="make.com logo" />
                  <h2 className="text-md lg:card-title">Hack productivity with tools like Cron</h2>
                </div>
              </div>
              <div className="mt-8 flex-col max-w-sm">
                <Image width={!isMobile ? 300 : 150} src={LaptopAi} alt="Album" />
                <div className="flex">
                  <Image className="object-contain" width={!isMobile ? 70 : 35} src={AiLogo} alt="chatGPT logo" />
                  <h2 className="text-md lg:card-title">Use AI automations & custom prompts</h2>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mt-8 flex-col max-w-sm">
                <Image width={!isMobile ? 300 : 150} src={LaptopWebstorm} alt="Album" />
                <div className="flex">
                  <Image className="object-contain" width={!isMobile ? 70 : 35} src={WebstormLogo} alt="webstorm logo" />
                  <h2 className="text-md lg:card-title">Write highly efficient code</h2>
                </div>
              </div>
              <div className="mt-8 flex-col max-w-sm">
                <Image width={!isMobile ? 300 : 150} src={LaptopCanva} alt="Album" />
                <div className="flex">
                  <Image className="object-contain" width={!isMobile ? 70 : 35} src={CanvaLogo} alt="canva logo" />
                  <h2 className="text-md lg:card-title">Work on your personal brand</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="divider lg:divider-horizontal">OR</div>
          <div className="flex-col">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-16 text-center">🚫 Archaic</h2>
            <div className="flex-col">
              <Image width={!isMobile ? 300 : 150} src={LaptopWebstorm} alt="Album" />
              <div className="flex">
                <Image className="object-contain" width={!isMobile ? 70 : 35} src={WebstormLogo} alt="webstorm logo" />
                <h2 className="text-md lg:card-title">Just write code</h2>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};




