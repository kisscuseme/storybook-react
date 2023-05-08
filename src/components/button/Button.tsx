import { ButtonProps } from "./button.props";
import "./button.css";

/**
 * 기본 버튼 컴포넌트
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  color,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "button--primary" : "button--secondary";
  return (
    <button
      type="button"
      className={["button", `button--${size}`, mode].join(" ")}
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </button>
  );
};
