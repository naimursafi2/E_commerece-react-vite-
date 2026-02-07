import React from "react";

const Button = ({
  children,
  text = "",
  type = "button",
  variant = "primary",
  onClick,
  size ="md",
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyle =
    "rounded-lg font-medium transition";

  const variants = {
    primary: "bg-brand text-white hover:bg-brand/90",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-brand text-brand hover:bg-brand hover:text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2 text-sm",
    lg: "px-7 py-3 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyle}
        ${variants[variant]}
        ${size ? sizes[size] : "px-5 py-2 text-sm"} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
     {children || text}
    </button>
  );
};

export default Button;
