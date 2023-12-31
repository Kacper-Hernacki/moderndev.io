"use client";
import React from "react";
import { motion } from "framer-motion";
import { bounceAnimation, fadeInVariants, slideInFromLeft } from "@/utils";

interface BannerProps {
  header: string,
  paragraph: string,
  description: string,
}

export const BannerHome: React.FC<BannerProps> = ({ header, paragraph, description }) => {
  // @ts-ignore
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">{header}</h1>
          <p
            className="py-4 mt-6 text-3xl md:text-3xl lg:text-4xl text-accent font-bold">
            {paragraph}
          </p>
          <motion.p
            className="py-4 text-3xl md:text-3xl lg:text-4xl text-primary font-bold"
            animate={bounceAnimation as any}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};
