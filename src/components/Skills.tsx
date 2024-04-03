import React from "react";
import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 absolute shadow-dark cursor-pointer dark:bg-light dark:text-dark dark:shadow-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="text-8xl font-bold mt-48 w-full text-center mb-4 dark:text-light">
        Skills
      </h2>
      <div className="relative w-full h-screen flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 shadow-dark cursor-pointer dark:bg-light dark:shadow-light dark:text-dark"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="NextJS" x="0vw" y="12vw" />
        <Skill name="ReactJS" x="-20vw" y="-15vw" />
        <Skill name="Tailwind CSS" x="15vw" y="-12vw" />
        <Skill name="Firebase" x="32vw" y="-5vw" />
        <Skill name="MongoDB" x="0vw" y="-20vw" />
        <Skill name="Typescript" x="-25vw" y="18vw" />
        <Skill name="MongoDB" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
