import React from "react";

const Details = ({ company, time, address, desc }: any) => (
  <li>
    <div>
      <h3>{company}</h3>
    </div>
  </li>
);

const Education = () => {
  return (
    <div className="my-48">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div className="w-[75%] mx-auto relative"></div>
    </div>
  );
};

export default Education;
