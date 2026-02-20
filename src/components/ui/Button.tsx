"use client";

import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-white hover:bg-terracotta-dark active:bg-terracotta-dark",
  secondary:
    "bg-matcha text-warm-charcoal hover:bg-matcha-dark active:bg-matcha-dark",
  outline:
    "bg-transparent border-2 border-warm-charcoal text-warm-charcoal hover:bg-warm-charcoal hover:text-oat",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 pt-2 pb-3 text-sm",
  md: "px-7 pt-2.5 pb-[1.125rem] text-base",
  lg: "px-9 pt-3 pb-5 text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-body font-medium tracking-wide leading-none transition-all duration-300 ease-out cursor-pointer";

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${classes} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}>
      {children}
    </button>
  );
}
