// components/SectionWrapper.jsx
import React from "react";

const SectionWrapper = ({ children, className = "", maxW = "max-w-7xl" }) => {
  return (
    <section className={`w-full ${className}`}>
      <div className={`container mx-auto px-4 ${maxW}`}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
