"use client";
import { motion } from "framer-motion";
import { fadeInVariants, slideInFromLeft } from "@/utils";
import React from "react";

export default async function Product() {
  return (
    <motion.div
      className="pb-32"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible">
      <motion.div
        variants={slideInFromLeft}
        initial="hidden"
        whileInView="visible">
        <div className="flex-col">
          <h1 className="mb-4 text-5xl text-center font-bold gradient-span">Products</h1>
          <p className="mb-10">
            Check the products we offer:
          </p>
          <div>
            <h1 className="text-2xl font-bold mb-6">
              Web Platforms
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-6">
              Automations
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-6">
              Notion Templates
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-6">
              Custom Solutions
            </h1>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
