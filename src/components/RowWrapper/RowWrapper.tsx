import React, { ReactNode } from "react";

const RowWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
};

export default RowWrapper;
