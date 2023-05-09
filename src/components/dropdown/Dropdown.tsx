import { Dropdown as BootstrapDropdown } from 'react-bootstrap';
import { DropdownProps } from "./dropdown.props";
import "./dropdown.css";

/**
 * 기본 드롭다운 컴포넌트
 */
export const Dropdown = ({
  size = "medium",
  backgroundColor,
  color,
  initText,
  id,
  items,
  ...props
}: DropdownProps) => {
  document.documentElement.style.setProperty('--color', color ? color : '#1e1e1e');
  document.documentElement.style.setProperty('--background-color', backgroundColor ? backgroundColor : '#ffffff');

  return (
    <BootstrapDropdown {...props}>
      <BootstrapDropdown.Toggle variant="primary" id={id} className={`dropdown--${size}`}>
        {initText}
      </BootstrapDropdown.Toggle>

      <BootstrapDropdown.Menu className={`dropdown--${size}`}>
        {items.map(item => <BootstrapDropdown.Item href={item["href"]} key={item["key"]} eventKey={item["key"]}>{item["label"]}</BootstrapDropdown.Item>)}
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
};
