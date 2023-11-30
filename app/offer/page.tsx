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
        <div className="flex-col">
          <div className="flex-col w-full lg:flex-row justify-center">
            <h1 className="mb-10 overflow-hidden text-5xl text-center font-bold gradient-span">Schedule Quick Consultations</h1>
            <InlineWidget url={process.env.NEXT_PUBLIC_CALENDLY_URL as string} />
          </div>
          <div className="mt-24 flex-col w-full lg:flex-row justify-center">
            <h1 className="mb-28 text-5xl text-center font-bold gradient-span">Or type your requirements</h1>
            <Widget
              id={process.env.NEXT_PUBLIC_TYPEFORM_ID as string}
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
