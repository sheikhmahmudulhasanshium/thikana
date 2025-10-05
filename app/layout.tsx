// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/common/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-sans", // Use --font-sans for shadcn compatibility
  subsets: ["latin"],
});

// We are using a single font, so geistMono is not needed unless you have specific use cases for it.
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// This is the root metadata for the entire application.
export const metadata: Metadata = {
  title: {
    default: "Thikana",
    template: "%s | Thikana", // For page-specific titles, e.g., "Dashboard | Thikana"
  },
  description:
    "Thikana is a trusted property management system that brings clarity, structure, and security to real estate ownership, acting as the guardian of your real estate legacy.",
  // For better social sharing previews
  openGraph: {
    title: "Thikana",
    description: "Guardians of your real estate legacy.",
    siteName: "Thikana",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thikana",
    description: "Guardians of your real estate legacy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}