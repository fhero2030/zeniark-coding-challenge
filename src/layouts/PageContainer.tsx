import React from "react";

type Props = {
  children: React.ReactNode;
};

const PageContainer = (props: Props) => {
  const { children } = props;

  return (
    <div className="mx-auto min-h-screen max-w-[1440px]">
      <div className="bg-zeniark-bg bg-fixed bg-no-repeat bg-center bg-cover min-h-screen w-full flex flex-row items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
