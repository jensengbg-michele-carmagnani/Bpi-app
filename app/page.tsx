import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

export default function Home() {
  return (
    <main className=" ">
      <div className="flex flex-col items-center justify-center space-y-2 h-screen text-center">
        <h1 className="font-bold text-4xl">Calcolatore del punteggio BPI</h1>
        <p className="text-2xl">Brief Pain Inventory</p>

        <Link href={"/bpi-calculator"}>
          <BsArrowRightCircle size={45} className="text-purple-600" />
        </Link>
      </div>
    </main>
  );
}
