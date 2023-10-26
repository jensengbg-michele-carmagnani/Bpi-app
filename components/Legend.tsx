import useZStore from "@/app/hooks/useStore";
import { cn } from "@/lib/utils";
import { STEPS } from "@/typings";
import React from "react";

type Props = {
  title_1?: string;
  title_2?: string;
  title_3?: string;
  className: string;
};

const Legend: React.FC<Props> = ({ title_1, title_2, title_3, className }) => {
  const { step } = useZStore();
  const resultStep = +step !== STEPS.RESULTS;
  console.log(resultStep);
  return (
    <div className={cn("flex flex-col justify-start", className)}>
      <p>* Nessun dolore = 0; Dolore più forte immaginabile = 10;</p>
      <p>** Nessun sollievo = 0; Completo sollievo = 100%;</p>
      <p>*** Non interferisce = 0; Interferisce completamente = 10</p>
    </div>
  );
};

export default Legend;
