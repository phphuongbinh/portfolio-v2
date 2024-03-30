import { GithubIcon } from "@/components/icons";
import AnimatedText from "@/components/utils/AnimatedText";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import projectImg from "../../public/images/projectImg.jpg";

interface FeaturedProjectProps {
  type?: string;
  title?: string;
  summary?: string;
  img?: string | StaticImageData;
  link?: string;
  github?: string;
}

const FeaturedProject = ({
  type,
  title,
  summary,
  img = "",
  link = "",
  github = "",
}: FeaturedProjectProps) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl space-x-6 p-12">
      <Link href={link} target="_blank" className="w-1/2 ">
        <Image src={img} alt="" className="w-full h-auto rounded-lg"></Image>
      </Link>
      <div className="w-1/2 ">
        <span className="text-xl text-primary font-medium ">{type}</span>
        <Link href={link} target="_blank">
          <h2 className="text-4xl font-bold hover:underline my-3">{title}</h2>
        </Link>
        <p className="font-medium text-dark">{summary}</p>
        <div className="flex items-center gap-4 mt-3">
          <Link href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="bg-dark text-white px-6 py-3 rounded-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

interface ProjectProps {
  type: string;
  title?: string;
  img?: string | StaticImageData;
  link?: string;
  github?: string;
}

const Project = ({
  type,
  title,
  img = "",
  link = "",
  github = "",
}: ProjectProps) => {
  return (
    <article className=" relative">
      <div className="absolute -z-0 top-0 -right-3 w-[102%] h-[103%] bg-dark rounded-3xl"></div>
      <div className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 relative z-10">
        <Link href={link} target="_blank" className="w-full">
          <Image src={img} alt="" className="w-full h-auto rounded-lg"></Image>
        </Link>
        <div className="w-full mt-4">
          <span className="text-xl text-primary font-medium ">{type}</span>

          <Link href={link} target="_blank">
            <h2 className="text-4xl font-bold hover:underline my-3">{title}</h2>
          </Link>
          <div className="flex items-center justify-between mt-3">
            <Link href={link} target="_blank" className="text-dark font-medium">
              Visit Project
            </Link>
            <Link href={github} target="_blank">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Projects Page</title>
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center px-32">
        <AnimatedText
          text="Imagination Trumps Knowledge!"
          className="text-8xl py-8 mb-12"
        />
        <div className="grid grid-cols-12 gap-24">
          <div className="col-span-12">
            <FeaturedProject
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              title="Crypto Screener Application"
              link="https://github.com/codebucks27/CryptoBucks-Final-Code"
              github="https://github.com/codebucks27/CryptoBucks-Final-Code"
              img={projectImg}
              type="Featured Project"
            />
          </div>
          <div className="col-span-6">
            <Project
              type="Website Template"
              github="/"
              img={projectImg}
              link="/"
              title="NFT collection Website"
            />
          </div>
          <div className="col-span-6">
            <Project
              type="Website Template"
              github="/"
              img={projectImg}
              link="/"
              title="NFT collection Website"
            />
          </div>
          <div className="col-span-12">
            <FeaturedProject
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
              title="Crypto Screener Application"
              link="https://github.com/codebucks27/CryptoBucks-Final-Code"
              github="https://github.com/codebucks27/CryptoBucks-Final-Code"
              img={projectImg}
              type="Featured Project"
            />
          </div>
          <div className="col-span-6">
            <Project
              type="Website Template"
              github="/"
              img={projectImg}
              link="/"
              title="NFT collection Website"
            />
          </div>
          <div className="col-span-6">
            <Project
              type="Website Template"
              github="/"
              img={projectImg}
              link="/"
              title="NFT collection Website"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default projects;
