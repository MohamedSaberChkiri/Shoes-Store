import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";



import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';






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
    <html lang="en">
      <body className="overflow-x-none">
        <CartProvider>
      <NavBar/>
        {children}

       


        <Footer/>
       
        </CartProvider>
        </body>
    </html>
  );
}
