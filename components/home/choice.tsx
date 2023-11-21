"use client"
import React from "react";
import { motion } from "framer-motion";
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
      transition: { duration: 0.5 }
    }
  };
  return (
    <motion.div
      className="w-screen h-screen p-10"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInFromLeft}>
      <h3 className="mt-52 mb-12 text-7xl font-bold text-center">
        Your choice 🎯</h3>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="text-2xl grid flex-grow h-32 card bg-base-300 rounded-box place-items-center cursor-pointer">Modern</div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="text-2xl grid flex-grow h-32 card bg-base-300 rounded-box place-items-center cursor-pointer">Archaic</div>
      </div>
    </motion.div>
    </motion.div>
  );
};




