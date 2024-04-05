import AnimatedText from "@/components/utils/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profilePic.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef<HTMLElement | null>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    console.log(ref.current);
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Portfolio | About Page</title>
      </Head>
      <main className="flex items-center justify-center flex-col w-full px-32 lg:px-16">
        <AnimatedText text="Passion Fuels Purpose" className="text-8xl py-8" />
        <div className="grid w-full grid-cols-8 gap-16 pb-16">
          <div className="col-span-3 flex flex-col dark:text-light">
            <h2 className="text-lg text-dark/75 uppercase mb-4 font-bold dark:text-light/75">
              Biography
            </h2>
            <p className="font-medium">
              Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my
              clients&apos; visions to life.
            </p>

            <p className="font-medium my-4">
              I believe that design is about more than just making things look
              pretty – it&apos;s about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>

            <p className="font-medium">
              Whether I&apos;m working on a website, mobile app, or other
              digital product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
          <div className="col-span-3 relative h-max ">
            <div className="absolute -z-0 top-0 -right-3 w-[102%] h-[103%] bg-dark dark:bg-light  rounded-3xl"></div>
            <div className="relative z-10 rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8">
              <Image
                src={profilePic}
                alt="phuongbinhdev"
                className="rounded-2xl w-full h-auto "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              ></Image>
            </div>
          </div>
          <div className="col-span-2 flex flex-col justify-between items-end">
            <div className="flex flex-col items-end justify-center">
              <span className="text-7xl dark:text-light font-bold inline-block">
                <AnimatedNumbers value={20} />+
              </span>
              <h3 className="text-xl font-medium text-dark/75 dark:text-light/75 capitalize">
                Satisfied Clients
              </h3>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="text-7xl dark:text-light font-bold inline-block">
                <AnimatedNumbers value={7} />+
              </span>
              <h3 className="text-xl font-medium text-dark/75 dark:text-light/75 capitalize">
                Projects Completed
              </h3>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="text-7xl dark:text-light font-bold inline-block">
                <AnimatedNumbers value={1} />+
              </span>
              <h3 className="text-xl font-medium text-dark/75 dark:text-light/75 capitalize">
                Years Of Experience
              </h3>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </main>
    </>
  );
};

export default about;
