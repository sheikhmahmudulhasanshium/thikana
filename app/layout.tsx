import type { Metadata, Viewport } from "next";
import "./globals.css";
import BasicPageProvider from "@/components/common/providers/basic-page-provider";

// This is the root metadata for the ENTIRE application.
// It is a separate export and does not clutter the RootLayout component logic.
// This is a SERVER-ONLY feature.
export const metadata: Metadata = {
  title: {
    default: "Thikana",
    template: "%s | Thikana", // For page-specific titles, e.g., "Home | Thikana"
  },
  description:
    "Thikana is a trusted property management system that brings clarity, structure, and security to real estate ownership, acting as the guardian of your real estate legacy.",
  openGraph: {
    title: "Thikana",
    description: "Guardians of your real estate legacy.",
    siteName: "Thikana",
    type: "website",
    locale: "en_US",
    // url: 'https://your-domain.com', // Add your production URL here
    // images: ['https://your-domain.com/og-image.png'], // Add a default social preview image
  },
  twitter: {
    card: "summary_large_image",
    title: "Thikana",
    description: "Guardians of your real estate legacy.",
    // images: ['https://your-domain.com/twitter-image.png'], // Add a default Twitter image
  },
  icons: {
    icon: "/favicon.ico", // Place your favicon in the public directory
    // shortcut: '/favicon-16x16.png',
    // apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff', // Light mode theme color
  colorScheme: 'light dark',
};


// This RootLayout is a Server Component. Its only job is to provide the root HTML
// structure and delegate the rest of the setup to the BasicPageProvider.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <BasicPageProvider>{children}</BasicPageProvider>
      </body>
    </html>
  );
}