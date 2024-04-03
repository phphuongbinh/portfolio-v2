import React from "react";
import { motion, useScroll } from "framer-motion";

interface ListItemIconProps {
  ref: React.RefObject<HTMLElement>;
}

const ListItemIcon = ({ ref }: any) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-dark">
      <svg width={75} height={75} viewBox="0 0 100 100" className="-rotate-90">
        <circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
        />
        <motion.circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-[5px] fill-light"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx={75}
          cy={50}
          r={10}
          className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default ListItemIcon;
