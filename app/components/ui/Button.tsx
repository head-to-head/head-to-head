"use client";
// components/ui/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: ReactNode;
};

export function Button({ children, className = "", ...props }: ButtonProps) {
  return <button {...props} className={`btn ${className}`}>{children}</button>;
}
