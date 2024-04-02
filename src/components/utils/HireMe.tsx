import React from "react";
import CircularText from "../icons/CircularText";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden ">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className="animate-spin-slow duration-1000 dark:fill-light" />
        <Link
          href="mailto:phuongbinhdev@gmail.com"
          className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark rounded-full w-24 h-24 text-white border-2 border-dark hover:bg-white hover:text-dark duration-200 font-semibold dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light"
        >
          {" "}
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
