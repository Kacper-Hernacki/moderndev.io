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
          <h1 className="text-7xl font-bold">{header}</h1>
          <p
            className="py-6 mt-8 text-4xl text-accent font-bold">
            {paragraph}
          </p>
          <motion.p
            className="py-6 text-4xl text-primary font-bold"
            // @ts-ignore
            animate={bounceAnimation}>
            {description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};
