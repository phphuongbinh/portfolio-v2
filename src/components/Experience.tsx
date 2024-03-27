import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListItemIcon from "./icons/ListItemIcon";

const Details = ({ position, company, time, address, work }: any) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <ListItemIcon ref={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl ">
          {position}&nbsp;
          <a href="" target="_blank" className="text-primary capitalize">
            @{company}
          </a>{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75 ">
          {time} | {address}
        </span>
        <p className="font-medium">{work}</p>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-1 h-full bg-dark origin-top"
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
