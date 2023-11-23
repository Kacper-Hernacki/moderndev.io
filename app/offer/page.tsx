"use client";
"use client";
import React from "react";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import { fadeInVariants, slideInFromLeft } from "@/utils";
import { Widget } from "@typeform/embed-react";

export default function Offer() {
  return (
    <motion.div
      className="pt-52 pb-32"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible">
      <motion.div
        variants={slideInFromLeft}
        initial="hidden"
        whileInView="visible">
        <div className="flex">
          <div className="flex-col w-full lg:flex-row justify-center">
            <h1 className="mb-10 text-5xl text-center font-bold gradient-span">Schedule Quick Consultations</h1>
            <InlineWidget url="https://calendly.com/moderndev/30min?background_color=12181b&text_color=ffffff&primary_color=605ad4" />
          </div>
          <div className="divider lg:divider-horizontal">OR</div>
          <div className="flex-col w-full lg:flex-row justify-center">
            <h1 className="mb-28 text-5xl text-center font-bold gradient-span">Type your requirements</h1>
            <Widget
              id={"odTkYugF"}
              style={{ maxWidth: "800px", height: "500px",marginLeft:"auto", marginRight:"auto" }}
              onSubmit={() => {
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
