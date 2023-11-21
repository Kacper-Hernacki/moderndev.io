export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.8 },
  },
};

export const bounceAnimation = {
  y: [0, -25],
  transition: {
    duration: 1,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeOut",
  },
};

export const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};