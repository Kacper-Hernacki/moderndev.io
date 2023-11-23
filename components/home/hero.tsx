"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInVariants, slideInFromLeft } from "@/utils";

export const HeroComponent = ({}) => {

  return (
    <motion.div
      className="hero -mt-10 h-screen"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInFromLeft}
        className="hero-content flex-col lg:flex-row-reverse">
        {/*<YouTubePlayer videoId="Ix6JoarGYiA"/>*/}
        <div>
          <h1 className="text-9xl font-bold gradient-span">Become Modern Developer</h1>
          <p className="text-2xl py-6 font-bold">
            Tech is constantly changing, do not stay behind!
          </p>
          <button className="btn btn-accent btn-lg">Get Started</button>
        </div>
      </motion.div>
    </motion.div>
  );
};





