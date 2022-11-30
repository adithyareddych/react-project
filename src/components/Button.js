import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
const styles = ["btn1--primary", "btn1--outline", "btn1--test"];
const sizes = ["btn1--medium", "btn1--large"];
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = styles.includes(buttonStyle)
    ? buttonStyle
    : styles[0];

  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

  return (
    <Link to="/" className="btn1-mobile">
      <button
        className={`btn1 ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
