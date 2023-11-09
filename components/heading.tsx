"use cliente";

import { cn } from "@/lib/utils";

interface HeadingProps {
  title?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}
const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  className,
}) => {
  return (
    <div className={(cn(center ? "text-center" : "text-start"), className)}>
      <div className="text-xl md:text-3xl font-semibold ">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
