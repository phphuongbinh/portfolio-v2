import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = ({ href, title, className }: CustomLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear   duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } `}
      ></span>
    </Link>
  );
};

export default CustomLink;
