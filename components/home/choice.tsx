"use client";
import React from "react";
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

export const ChoiceSection = ({}) => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.8 },
    },
  };

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.div
      className="w-screen h-screen p-10 max-w-7xl"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInFromLeft}>
        <h3 className="mt-52 mb-24 text-7xl font-bold text-center">
          <span className="gradient-span">Your choice</span> 🎯</h3>

        <div className="flex flex-col w-full lg:flex-row justify-center">
          <div className="flex-col">
            <h2 className="text-4xl font-bold mb-16 text-center">✅ Modern</h2>
            <div className="flex">
              <div className="flex-col">
                <div className="flex-col">
                  <Image width={400} src={LaptopAutomations} alt="Album" />
                  <div className="flex">
                    <Image width={70} src={MakeLogo} alt="make.com logo" />
                    <h2 className="card-title ml-5">Automate tasks with make.com</h2>
                  </div>
                </div>
              </div>
              <div className="flex-col">
                <Image width={400} src={LaptopNotion} alt="Album" />
                <div className="flex">
                  <Image width={70} src={NotionLogo} alt="notion logo" />
                  <h2 className="card-title ml-5">Save data & Plan tasks with Notion</h2>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mt-8 flex-col">
                <Image width={400} src={LaptopCron} alt="Album" />
                <div className="flex">
                  <Image width={70} src={CronLogo} alt="make.com logo" />
                  <h2 className="card-title ml-5">Hack productivity with tools like Cron</h2>
                </div>
              </div>
              <div className="mt-8 flex-col">
                <Image width={400} src={LaptopAi} alt="Album" />
                <div className="flex">
                  <Image width={70} src={AiLogo} alt="chatGPT logo" />
                  <h2 className="card-title ml-5">Use AI automations & custom prompts</h2>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mt-8 flex-col">
                <Image width={400} src={LaptopWebstorm} alt="Album" />
                <div className="flex">
                  <Image width={70} src={WebstormLogo} alt="webstorm logo" />
                  <h2 className="card-title ml-5">Write highly efficient code</h2>
                </div>
              </div>
              <div className="mt-8 flex-col">
                <Image width={400} src={LaptopCanva} alt="Album" />
                <div className="flex">
                  <Image width={70} src={CanvaLogo} alt="canva logo" />
                  <h2 className="card-title ml-5">Work on your personal brand</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="divider lg:divider-horizontal">OR</div>
          <div className="flex-col">
            <h2 className="text-4xl font-bold mb-16 text-center">🚫 Archaic</h2>
            <div className="flex-col">
              <Image width={400} src={LaptopWebstorm} alt="Album" />
              <div className="flex">
                <Image width={70} src={WebstormLogo} alt="webstorm logo" />
                <h2 className="card-title ml-5">Just write code</h2>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};




