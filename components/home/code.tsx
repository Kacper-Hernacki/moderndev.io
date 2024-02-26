"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInVariants, slideInFromLeft } from "@/utils";

export const CodeSnippet = ({}) => {
  return (
    <motion.div
      className="hero min-h-screen"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInFromLeft}
        className="mt-20 md:max-w-none lg:max-w-none md:mt-40 lg:mt-52">
        <h3 className="text-5xl md:text-6xl lg:text-7xl mb-12 md:mb-18 lg:mb-24 font-bold text-center gradient-span">
          Turn on modern developing mode
        </h3>
        <div className="mockup-code bg-gray-600 max-w-sm md:max-w-2xl lg:max-w-2xl ml-auto mr-auto p-4 md:p-6">
          <pre data-prefix="$"><code>npm i moderndev</code></pre>
          <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
          <pre data-prefix=">" className="text-primary"><code>Done!</code></pre>
          <pre data-prefix=">" ><code>Now you are up to date with the latest tech</code></pre>
          <pre data-prefix=">" className="text-secondary"><code>Start developing awesome stuff</code></pre>
        </div>
      </motion.div>
    </motion.div>
  );
};
