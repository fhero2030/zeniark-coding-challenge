import React from "react";
import Container from "./Container";

type Props = {
  children: React.ReactNode;
};

const PageContainer = (props: Props) => {
  const { children } = props;

  return (
    <div className="mx-auto min-h-screen max-w-[1440px]">
      <div className="flex flex-col items-start justify-center">{children}</div>
    </div>
  );
};

export default PageContainer;
