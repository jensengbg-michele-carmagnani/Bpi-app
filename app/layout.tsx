import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/nav-bar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brief Pain Inventory p",
  description:
    "Scopri l'utilità del Brief Pain Inventory (BPI) nel misurare il dolore in una vasta gamma di condizioni. Leggi come questo questionario può essere autosomministrato ai pazienti per valutare l'intensità e l'interferenza del dolore nella loro vita.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(cn(inter.className), "text-black aspect-video ")}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
