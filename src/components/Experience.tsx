import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListItemIcon from "./icons/ListItemIcon";

const Details = ({ position, company, time, address, work }: any) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between"
    >
      <ListItemIcon ref={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl dark:text-light">
          {position}&nbsp;
          <a
            href=""
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light">
          {time} | {address}
        </span>
        <p className="font-medium dark:text-light">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-48">
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl sm:text-4xl md:mb-16">
        Experience
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[85%]  md:w-[90%] sm:w-full"
      >
        <motion.div
          className="absolute left-9 top-0 w-1 h-full bg-dark dark:bg-primaryDark origin-top"
          style={{
            scaleY: scrollYProgress,
          }}
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Collaborative Lecturer"
            company="TEKY"
            time="08/2023 - now"
            address="District 7, Ho Chi Minh City"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          ></Details>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
