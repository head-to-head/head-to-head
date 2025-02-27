"use client";
// components/ui/Input.tsx
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function Input({ className = "", ...props }: InputProps) {
  return <input {...props} className={`input input-bordered ${className}`} />;
}

