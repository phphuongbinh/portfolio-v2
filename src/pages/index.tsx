import MainLayout from "@/components/layouts/MainLayout";
import Image from "next/image";
import homeImage from "../../public/images/home-bg.png";
import AnimatedText from "@/components/utils/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import HireMe from "@/components/utils/HireMe";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <main className="flex items-center w-full min-h-screen text-dark dark:text-light relative">
        <MainLayout>
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={homeImage}
                alt="home-image"
                className="w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              ></Image>
            </div>
            <div className="w-1/2">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="text-6xl text-left"
              />
              <p className="my-4 text-base font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, corrupti aspernatur laborum a saepe magni sed
                eveniet doloremque numquam eligendi!
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/CV.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-white py-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-transparent hover:border-dark duration-150 dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light"
                  download={true}
                >
                  Resume
                  <LinkArrow className="w-5 ml-1 " />
                </Link>
                <Link
                  href="mailto:mrsplol102@gmail.com"
                  target="_blank"
                  className="text-lg font-medium capitalize underline text-dark dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <HireMe />
        </MainLayout>
      </main>
    </div>
  );
}
