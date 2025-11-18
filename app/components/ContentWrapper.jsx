// components/ContentWrapper.jsx
import React from "react";

const ContentWrapper = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto px-8 max-w-7xl ${className}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
