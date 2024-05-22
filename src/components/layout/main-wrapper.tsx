import React from "react";

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className="pt-14">{children}</main>;
};

export default MainWrapper;
