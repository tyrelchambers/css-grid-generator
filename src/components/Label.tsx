import React from "react";

const Label = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}) => {
  return (
    <label className="text-gray-600 text-sm font-semibold" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
