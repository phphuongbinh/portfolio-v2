import Link from "next/link";
import React from "react";
import CircularText from "../icons/CircularText";

const Footer = () => {
  return (
    <div className="py-8 px-32 border-t-2 border-dark flex justify-between items-center text-base font-medium">
      <div>{new Date().getFullYear()} &copy; All Rights Reserved.</div>
      <div>
        Built with <span className="text-primary">&#9825;</span> by{" "}
        <Link
          href="https://github.com/phphuongbinh"
          className="underline underline-offset-2"
          target="_blank"
        >
          phuongbinhdev
        </Link>
      </div>
    </div>
  );
};

export default Footer;
