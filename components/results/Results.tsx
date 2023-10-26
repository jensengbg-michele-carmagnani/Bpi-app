import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";

export const Results = () => {
  return (
    <section className="space-y-10">
      <div className="space-y-5">
        <h2>Punteggio dell’intensità del dolore (dimensione sensitiva)</h2>
        <div className="flex h-24 relative space-x-2 ">
          <div className=" w-24 flex justify-center items-center bg-[#B51152] text-slate-50 text-center">
            12
          </div>
          <div className="flex-1">
            <motion.div
              className="bg-red-600 h-32 w-2 absolute -top-4 "
              initial={{ opacity: 0, x: 0 }}
              animate={{
                opacity: 0.7,
                x: `${40}vw`,
                transition: { duration: 1 },
              }}
              exit={{ opacity: 0 }}
            />
            <Image
              src="/scala.png"
              className=" h-24 w-full"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className="space-y-5 ">
        <h2>
          Punteggio dell’interferenza del dolore nella vita (dimensione
          affettiva)
        </h2>
        <div className="flex h-24 relative space-x-2">
          <div className=" w-24 flex justify-center items-center bg-[#B51152] text-slate-50 text-center">
            12
          </div>
          <div className="flex-1">
            <motion.div
              className="bg-red-600 h-32 w-2 absolute -top-4"
              initial={{ opacity: 0, x: 0 }}
              animate={{
                opacity: 0.7,
                x: `${10}vw`,
                transition: { duration: 1 },
              }}
              exit={{ opacity: 0 }}
            />
            <Image
              src="/scala_yellow.png"
              className=" h-24 w-full"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className="space-y-5 ">
        <h2>Interferenza con gli aspetti pratici della vita</h2>
        <div className="flex h-24 relative space-x-2">
          <div className=" w-24 flex justify-center items-center bg-[#B51152] text-slate-50 text-center">
            12
          </div>
          <div className="flex-1">
            <motion.div
              className="bg-red-600 h-32 w-2 absolute -top-4"
              initial={{ opacity: 0, x: 0 }}
              animate={{
                opacity: 0.7,
                x: `${30}vw`,
                transition: { duration: 1 },
              }}
              exit={{ opacity: 0 }}
            />
            <Image
              src="/scala_yellow.png"
              className=" h-24 w-full"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className="space-y-5 ">
        <h2>Interferenza con le relazioni affettive </h2>
        <div className="flex h-24 relative space-x-2">
          <div className=" w-24 flex justify-center items-center bg-[#B51152] text-slate-50 text-center">
            12
          </div>
          <div className="flex-1">
            <motion.div
              className="bg-red-600 h-32 w-2 absolute -top-4"
              initial={{ opacity: 0, x: 0 }}
              animate={{
                opacity: 0.7,
                x: `${60}vw`,
                transition: { duration: 1 },
              }}
              exit={{ opacity: 0 }}
            />
            <Image
              src="/scala_yellow.png"
              className=" h-24 w-full"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
