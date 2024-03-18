import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div>
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-white rounded-full flex items-center justify-center font-semibold text-2xl"
        whileHover={{ scale: 1.1 }}
      >
        EQ
      </MotionLink>
    </div>
  );
};

export default Logo;
