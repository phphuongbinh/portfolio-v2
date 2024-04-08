import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListItemIcon from "./icons/ListItemIcon";

const Details = ({ company, time, address, desc }: any) => {
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
        <h3 className="capitalize font-bold text-2xl dark:text-light md:text-lg">
          {company}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light md:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium dark:text-light lg:text-sm">{desc}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-48">
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl md:mb-16 sm:text-4xl ">
        Education
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[85%] md:w-[90%] sm:w-full"
      >
        <motion.div
          className="absolute left-9 top-0 w-1 h-full bg-dark dark:bg-primaryDark origin-top"
          style={{
            scaleY: scrollYProgress,
          }}
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            company="Bachelor Of Science In Computer Science"
            time="06/2023 - 12/2023"
            address="Cybersoft"
            desc="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          ></Details>
          <Details
            company="Bachelor Of Science In Computer Science"
            time="06/2023 - 12/2023"
            address="Cybersoft"
            desc="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          ></Details>
          <Details
            company="Bachelor Of Science In Computer Science"
            time="06/2023 - 12/2023"
            address="Cybersoft"
            desc="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          ></Details>
        </ul>
      </div>
    </div>
  );
};

export default Education;
