import Link from "next/link";
import React from "react";
import Logo from "../Logo";
import CustomLink from "../CustomLink";
import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../icons";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
      <nav className="flex gap-5">
        <CustomLink href="/" title="Home"></CustomLink>
        <CustomLink href="/about" title="About"></CustomLink>
        <CustomLink href="/projects" title="Projects"></CustomLink>
        <CustomLink href="/articles" title="Articles"></CustomLink>
      </nav>
      <nav className="flex gap-5 items-start">
        <MotionLink
          href="https://github.com/phphuongbinh"
          target="_blank"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </MotionLink>
        <MotionLink
          href="https://www.linkedin.com/in/phanphuongbinh/"
          target="_blank"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedinIcon />
        </MotionLink>
        <MotionLink
          href="https://twitter.com/phuongbinhdev"
          target="_blank"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </MotionLink>
        <MotionLink
          href="https://www.facebook.com/phuongbinhdev"
          target="_blank"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <FacebookIcon />
        </MotionLink>
      </nav>

      <div className="absolute left-[50%] top-3 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
