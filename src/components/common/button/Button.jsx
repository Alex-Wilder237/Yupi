import React from "react";

const Btn = ({ label, customLink, customStyle }) => {
  return (
    <a
      href={customLink}
      className={`rounded-full px-6 py-3 text-sm lg:text-md font-medium w-fit active:scale-[1.03] flex justify-center items-center ${customStyle}`}
    >
      {label}
    </a>
  );
};

export default Btn;

