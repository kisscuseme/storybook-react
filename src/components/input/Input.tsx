import { InputProps } from "./input.props";
import "./input.css";

/**
 * 기본 인풋 컴포넌트
 */
export const Input = ({
  size = "medium",
  color,
  placeholder,
  placeholderColor,
  borderColor,
  ...props
}: InputProps) => {
  document.documentElement.style.setProperty('--color', color ? color : '#1e1e1e');
  document.documentElement.style.setProperty('--placeholder-color', placeholderColor ? placeholderColor : '#cccccc');
  document.documentElement.style.setProperty('--border-color', borderColor ? borderColor : '#1e1e1e');
  return (<input
    type="text"
    className={["input", `input--${size}`].join(" ")}
    placeholder={placeholder}
    {...props}
  />);
};
