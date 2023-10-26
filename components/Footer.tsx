"use client";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Legend from "./Legend";

type Props = {
  onSubmit: () => void;
  title: string;
};

const Footer: React.FC<Props> = ({ onSubmit, title }) => {
  return (
    <div className="grid grid-col-1 text-center md:text-left md:grid-cols-2 gap-3 items-center ">
      <Legend className={cn("flex-initial text-sm")} />
      <Button
        className={cn(" bg-green-500 flex-auto justify-self-stretch ")}
        onClick={onSubmit}
      >
        {title}
      </Button>
    </div>
  );
};

export default Footer;
