import React from "react";

type Props<E extends React.ElementType> = {
  children?: React.ReactNode;
  as?: E;
};

type OwnProps<E extends React.ElementType> = Props<E> &
  Omit<React.ComponentProps<E>, keyof Props<E>>;

const Container = <E extends React.ElementType = "div">(props: OwnProps<E>) => {
  const { as, children, className } = props;

  const Component = as || "div";

  return (
    <Component className={`${className} bg-white w-[600px] p-7 mx-auto rounded-[10px] my-20`}>
      {children}
    </Component>
  );
};

export default Container;
