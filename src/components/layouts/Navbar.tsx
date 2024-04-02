import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import Logo from "../Logo";
import CustomLink from "../CustomLink";
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  SunnyToMoon,
  TwitterIcon,
} from "../icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import MoonToSunny from "../icons/MoonToSunny";

const MotionLink = motion(Link);

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center dark:text-light">
      <nav className="flex gap-5">
        <CustomLink href="/" title="Home"></CustomLink>
        <CustomLink href="/about" title="About"></CustomLink>
        <CustomLink href="/projects" title="Projects"></CustomLink>
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
          <TwitterIcon className={mode === "dark" ? "fill-light" : ""} />
        </MotionLink>
        <MotionLink
          href="https://www.facebook.com/phuongbinhdev"
          target="_blank"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <FacebookIcon />
        </MotionLink>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`flex items-center justify-center p-1 rounded-full self-center ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          {mode === "dark" ? (
            <SunnyToMoon className="fill-dark" />
          ) : (
            <MoonToSunny className="fill-dark" />
          )}
        </button>
      </nav>

      <div className="absolute left-[50%] top-4 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
