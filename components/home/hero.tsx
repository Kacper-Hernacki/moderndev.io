"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInVariants, slideInFromLeft } from "@/utils";

export const HeroComponent = ({}) => {

  return (
    <motion.div
      className="-mt-40 hero h-screen"
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
          <h1 className="text-7xl font-bold">Become Modern Developer</h1>
          <p className="text-2xl py-6">
            Tech is constantly changing, do not stay behind!
          </p>
          <button className="btn gradient-button">Get Started</button>
        </div>
      </motion.div>
    </motion.div>
  );
};





