"use client";
import { motion } from "framer-motion";
import { fadeInVariants, slideInFromLeft } from "@/utils";
import React from "react";
import Image from "next/image";
import notionFlow from "@/public/logos/notionflow-logo-minimal.png";
import githubLogo from "@/public/technologies/13.png";
import moderndevLogo from "@/public/moderndev-logo.png"
import Link from "next/link";

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
              Web Platforms:
            </h1>
            <div className="flex flex-col w-80 bg-gray-700 rounded-2xl p-4 mb-8">
              <Link target="_blank" className="flex justify-center items-center" href={"https://www.moderndev.io/pro"}>
                <Image width={100} height={100} src={moderndevLogo} alt="notionFlow" />
                <h3 className="ml-2 text-3xl font-bold">Moderndev PRO Access</h3>
              </Link>
              <p className="text-justify mt-4">
                Pro access to restricted premium content.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-6">
              Automations:
            </h1>
            <div className="flex flex-col w-80 bg-gray-700 rounded-2xl p-4 mb-8">
              <Link target="_blank" className="flex justify-center items-center" href={"https://github.com/Kacper-Hernacki/automations"}>
                <Image width={100} height={100} src={githubLogo} alt="notionFlow" />
                <h3 className="ml-2 text-3xl font-bold">Free Blueprints</h3>
              </Link>
              <p className="text-justify mt-4">
               Constantly updated repo with free to share automations
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-6">
              Notion Templates:
            </h1>
            <p className="text-xl text-primary mb-8">
              Available soon
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-6">
              Custom Solutions:
            </h1>
            <div className="flex flex-col w-80 bg-gray-700 rounded-2xl p-4">
              <Link target="_blank" className="flex justify-center items-center" href={"https://notionflow.site"}>
                <Image width={100} height={100} src={notionFlow} alt="notionFlow" />
                <h3 className="text-3xl font-bold">NotionFlow</h3>
              </Link>
              <p className="text-justify mt-4">
                The NextJS boilerplate with custom NOTION API connection and all you need, dedicated to launch and manage content from Notion level.
              </p>
            </div>


          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
