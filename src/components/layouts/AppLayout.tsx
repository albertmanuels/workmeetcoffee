import { Montserrat } from "next/font/google";
import React, { ReactNode } from "react";
import "@/app/globals.css";
import Header from "@/components/shared/Header";
import { HomeProvider } from "../pages/Home/context/HomeContext";
import Head from "next/head";

const monserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html className={monserrat.className}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <body>
        <HomeProvider>
          <Header />
          {children}
        </HomeProvider>
      </body>
    </html>
  );
};

export default AppLayout;
