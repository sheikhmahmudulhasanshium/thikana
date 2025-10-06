"use client";

import React from "react";
import { Geist } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import { cn } from "@/lib/utils";
import OfflineIndicator from "../components/offline-indicator";
import { BreadcrumbProvider } from "../components/dynamic-breadcrumb"; // Import the provider
import BasicBodyProvider from "./basic-body-provider";

interface BasicPageProviderProps {
    children: React.ReactNode;
}

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const BasicPageProvider: React.FC<BasicPageProviderProps> = ({ children }) => {
    return (
        <div
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              geistSans.variable
            )}
        >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {/* Wrap the body with the breadcrumb provider */}
              <BreadcrumbProvider>
                <OfflineIndicator />
                <BasicBodyProvider>
                  {children}
                </BasicBodyProvider>
              </BreadcrumbProvider>
            </ThemeProvider>
        </div>
     );
}
 
export default BasicPageProvider;