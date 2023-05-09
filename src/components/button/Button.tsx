import { Button as BootstrapButton } from 'react-bootstrap';
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
  document.documentElement.style.setProperty('--color', color ? color : (primary ? '#1e1e1e' : '#6e6e6e'));
  document.documentElement.style.setProperty('--background-color', backgroundColor ? backgroundColor : '#ffffff');
  return (
    <BootstrapButton
      className={["button", `button--${size}`].join(" ")}
      {...props}
    >
      {label}
    </BootstrapButton>
  );
};
