"use client";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("max-w-6xl mx-auto md:px-10 px-2 mt-10 ", className)}>
      {children}
    </div>
  );
};

export default Container;
