import React from "react";

const Details = ({ company, time, address, desc }: any) => (
  <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
    <div>
      <h3 className="capitalize font-bold text-2xl ">{company}</h3>
      <span className="capitalize font-medium text-dark/75 ">
        {time} | {address}
      </span>
      <p className="font-medium">{desc}</p>
    </div>
  </li>
);

const Education = () => {
  return (
    <div className="my-48">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div className="w-[75%] mx-auto relative">
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
