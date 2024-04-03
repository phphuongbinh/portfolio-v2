import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface CustomMobileLinkProps {
  href: string;
  title: string;
  className?: string;
  toggle: (() => void) | undefined;
}

const CustomMobileLink = ({
  href,
  title,
  className,
  toggle = () => {},
}: CustomMobileLinkProps) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <Link
      href={href}
      className={`${className} relative group`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light  absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear   duration-300 dark:bg-dark ${
          router.asPath === href ? "w-full" : "w-0"
        } `}
      ></span>
    </Link>
  );
};

export default CustomMobileLink;
