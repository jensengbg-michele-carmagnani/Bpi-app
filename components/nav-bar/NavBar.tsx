"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AiOutlineHome } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import Link from "next/link";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

import useBpiStorage from "@/app/hooks/useStore";
import Heading from "../heading";
import { usePathname } from "next/navigation";
import { STEPS } from "@/typings";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: <AiOutlineHome size={35} />,
  },
  { name: "Bibliografia", href: "/", icon: <BiBookmark size={35} /> },
];

const titles = {
  START: "Brief Pain Inventory (BPI)",
  LOCATION: "Selezionare la parte del corpo dove sente dolore",
  PAINASSESSMENT: "Trascini il cursore per selezionare la sua risposta",
  CAPABILITIESASSESSMENT: "Trascini il cursore per selezionare la sua risposta",
  RESULTS: "Interpretazione dei risultati1,3",
};
const stepToTitle = {
  [STEPS.START]: titles.START,
  [STEPS.LOCATIONPAIN]: titles.LOCATION,
  [STEPS.PAINASSESSMENT]: titles.PAINASSESSMENT,
  [STEPS.CAPABILITIESASSESSMENT]: titles.CAPABILITIESASSESSMENT,
  [STEPS.RESULTS]: titles.RESULTS,
};
const ROOT_PATH = "/";
type Props = {};

const NavBar: React.FC<Props> = () => {
  const { onNext, onBack, step, resetStep } = useBpiStorage();
  const pathname = usePathname();

  if (pathname === ROOT_PATH) return null;

  return (
    <div
      className={cn(
        `border-b  flex  flex-col-reverse md:flex-row  justify-between items-center px-10 py-5 `
      )}
    >
      {step !== STEPS.START && stepToTitle[step] && (
        <Heading title={stepToTitle[step]} className={cn(" ")} />
      )}

      <div className="flex h-16 items-center px-4">
        <nav className={cn("flex items-center space-x-4 lg:space-x-6")}>
          {navItems.map((navItem, i) => (
            <Link key={i} href={navItem.href}>
              {navItem.icon}
            </Link>
          ))}
          {step !== STEPS.START && (
            <button className="cursor-pointer" onClick={() => onBack()}>
              <BsArrowLeftSquareFill size={35} />
            </button>
          )}
          {step !== STEPS.RESULTS && (
            <button className="cursor-pointer" onClick={() => onNext()}>
              <BsArrowRightSquareFill size={35} />
            </button>
          )}
          <button
            className="cursor-pointer"
            onClick={() => {
              resetStep();
            }}
          >
            <GrPowerReset size={35} />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
