import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
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
import CustomMobileLink from "../CustomMobileLink";

const MotionLink = motion(Link);

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenuButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 lg:px-16 md:px-12 sm:px-8 py-8 font-medium flex justify-between items-center dark:text-light relative">
      <button
        className=" items-center justify-center flex-col hidden lg:flex"
        onClick={handleClickMenuButton}
      >
        <span
          className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ease-linear bg-dark dark:bg-light   ${
            isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ease-linear bg-dark dark:bg-light  my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm transition-all duration-300 ease-linear bg-dark dark:bg-light   ${
            isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex items-center justify-between lg:hidden">
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
      </div>

      {isOpen ? (
        <div
          className={`min-w-[70vw] sm:min-w-[90vw]  flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <nav className="flex gap-5 flex-col mb-6 items-center text-light dark:text-dark">
            <CustomMobileLink
              toggle={handleClickMenuButton}
              href="/"
              title="Home"
            ></CustomMobileLink>
            <CustomMobileLink
              toggle={handleClickMenuButton}
              href="/about"
              title="About"
            ></CustomMobileLink>
            <CustomMobileLink
              toggle={handleClickMenuButton}
              href="/projects"
              title="Projects"
            ></CustomMobileLink>
          </nav>

          <nav className="flex gap-5 items-start text-light dark:text-dark">
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
              <TwitterIcon className={mode === "dark" ? "" : "fill-light"} />
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
        </div>
      ) : null}

      <div className="absolute left-[50%] top-4 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
