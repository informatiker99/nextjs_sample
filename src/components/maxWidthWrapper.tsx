import React, { ReactNode } from "react";

const MaxWidthWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-6xl">{children}</div>;
};

export default MaxWidthWrapper;
