"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInVariants, slideInFromLeft } from "@/utils";
import Link from "next/link";

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
        <div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold gradient-span">
            Become Modern Developer
          </h1>
          <p className="text-xl py-4 lg:text-2xl lg:py-6 font-bold">
            Tech is constantly changing, do not stay behind!
          </p>
          <Link href='/courses'>
            <button className="btn btn-accent btn-md lg:btn-lg">Get Started</button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};
