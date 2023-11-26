"use client"
import React from "react";
import { fadeInVariants, slideInFromLeft, slideInFromRight } from "@/utils";
import { motion } from "framer-motion";
import ModerndevAvatar from "@/public/avatars/moderndev.jpeg"
import ArchaicDevAvatar from "@/public/avatars/dev-avatar-chat.png"
import Image from "next/image";
export const HomeConversation = () => {
  return (
    <motion.div
      className="h-screen"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div   variants={slideInFromLeft}
                    initial="hidden"
                    whileInView="visible" className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image alt="Archaic Dev" src={ArchaicDevAvatar} />
          </div>
        </div>
        <div className="chat-header">
          Archaic Dev
          <time className="text-xs opacity-50 ml-1">12:45</time>
        </div>
        <div className="chat-bubble">Is this true, that as I am a developer, I can learn tools and latest tech easily and quick?</div>
        <div className="chat-footer opacity-50">
          Delivered
        </div>
      </motion.div>
      <motion.div   variants={slideInFromRight}
                    initial="hidden"
                    whileInView="visible" className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image alt="moderndev" src={ModerndevAvatar} />
          </div>
        </div>
        <div className="chat-header">
          Moderndev
          <time className="text-xs opacity-50 ml-1">12:46</time>
        </div>
        <div className="chat-bubble">Yes... so do not wait and be 10x more productive</div>
        <div className="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </motion.div>
  </motion.div>
  );
};

HomeConversation.propTypes = {};

HomeConversation.defaultProps = {};



