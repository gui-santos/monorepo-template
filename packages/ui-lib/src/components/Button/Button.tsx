import * as React from "react";

export interface ButtonProps {
  onClick: VoidFunction;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
