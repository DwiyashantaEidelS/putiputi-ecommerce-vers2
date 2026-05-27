import type { ReactNode, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  to?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  to,
  ...props
}: ButtonProps) => {
  const baseStyle = `
    inline-flex
    items-center
    justify-center
    px-6
    py-3
    rounded-full
    font-semibold
    transition-all
    duration-300
    hover:-translate-y-1
    active:scale-95
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-pink-500
      text-white
      hover:bg-black
      shadow-md
      hover:shadow-xl
    `,
    secondary: `
      bg-white
      border
      border-pink-500
      text-pink-500
      hover:bg-pink-500
      hover:text-white
    `,
  };

  // LINK BUTTON
  if (to) {
    return (
      <Link
        to={to}
        className={`
          ${baseStyle}
          ${variants[variant]}
          ${className}
        `}
      >
        {children}
      </Link>
    );
  }

  // NORMAL BUTTON
  return (
    <button
      {...props}
      onClick={onClick}
      className={`
        ${baseStyle}
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;