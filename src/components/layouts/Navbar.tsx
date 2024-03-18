import Link from "next/link";
import React from "react";
import Logo from "../Logo";
import CustomLink from "../CustomLink";
import FacebookIcon from "../icons/FacebookIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

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
        <Link href="/">
          <FacebookIcon />
        </Link>
        <Link href="/">
          <GithubIcon />
        </Link>
        <Link href="/">
          <LinkedinIcon />
        </Link>
        <Link href="/">T</Link>
        <Link href="/">T</Link>
        <Link href="/">T</Link>
      </nav>

      <div className="absolute left-[50%] top-3 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
