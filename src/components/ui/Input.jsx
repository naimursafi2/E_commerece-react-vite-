import React from "react";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  icon,
  disabled = false,
  className = "",
  ...rest
}) => {
  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      {/* Input Wrapper */}
      <div
        className={`flex items-center gap-2 border rounded-lg px-3 py-2 
        ${
          error
            ? "border-red-500 focus-within:ring-red-500"
            : "border-gray-300 focus-within:ring-brand"
        }
        focus-within:ring-2 transition`}
      >
        {/* Icon */}
        {icon && <span className="text-gray-400">{icon}</span>}

        {/* Input */}
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full outline-none bg-transparent text-sm 
          placeholder:text-gray-400 disabled:cursor-not-allowed
          ${className}`}
          {...rest}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;