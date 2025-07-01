// Container.tsx or Container.jsx
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  size?: "lg" | "md" | "sm";
}

export default function Container({ children, size = "lg" }: ContainerProps) {
  const sizeClasses = {
    lg: "max-w-7xl mx-auto px-4",
    md: "max-w-4xl mx-auto px-4",
    sm: "max-w-2xl mx-auto px-4",
  };

  return <div className={sizeClasses[size]}>{children}</div>;
}
