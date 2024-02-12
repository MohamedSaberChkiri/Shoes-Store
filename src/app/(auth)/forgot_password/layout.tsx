import type { Metadata } from "next";

import "../../globals.css";

import LayoutTop from "@/components/LayoutTop";
import { CartProvider } from "@/contexts/CartContext";




export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      
       
      <LayoutTop text="RESET YOUR PASSWORD"/>
      <CartProvider>
        {children}
        </CartProvider>
       
    </div>
  );
}
