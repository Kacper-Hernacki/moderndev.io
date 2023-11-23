"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInVariants, slideInFromLeft } from "@/utils";

export const CodeSnippet = ({}) => {

  return (
    <motion.div
      className="hero h-screen"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInFromLeft}
        className=" mt-52">
        <h3 className="text-7xl mb-12 font-bold text-center gradient-span">Turn on modern developing mode</h3>
        <div className="mockup-code bg-gray-600">
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





