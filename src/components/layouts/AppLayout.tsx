import { Montserrat } from "next/font/google";
import React, { ReactNode } from "react";
import "@/app/globals.css";
import Header from "@/components/shared/Header";

const monserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html className={monserrat.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default AppLayout;
