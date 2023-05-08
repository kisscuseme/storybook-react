import "./text.css";
import React from "react";
import { TextProps } from "./text.props";

/**
 * 기본 텍스트 컴포넌트
 */
export const Text = <E extends React.ElementType>({
  size = "medium",
  children,
  as,
  color,
  ...props
}: TextProps<E>) => {
  const Component = as || 'div';
  let classString = "text";
  if(['h1','h2','h3','h4','h5','h6'].indexOf(as as string) < 0) {
    classString = ["text", `text--${size}`,].join(" ");
  }

  return (
    <Component
      className={classString}
      style={{ color }}
      {...props}
    >
      {children}
    </Component>
  );
};
