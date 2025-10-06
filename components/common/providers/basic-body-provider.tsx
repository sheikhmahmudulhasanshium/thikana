"use client";

import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import DynamicBreadcrumb from "../components/dynamic-breadcrumb"; // Import the visual component

interface BasicBodyProviderProps {
  children: React.ReactNode;
}

const BasicBodyProvider = ({ children }: BasicBodyProviderProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Render the breadcrumb component here */}
        <DynamicBreadcrumb />
        {children}
      </main>
      <Footer />
    </div>
  );
};
 
export default BasicBodyProvider;