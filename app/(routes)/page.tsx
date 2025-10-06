import { Metadata } from "next";

// This works because the file is a Server Component (no "use client").
export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Thikana - The guardian of your real estate legacy.",
};

export default function Home() {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold">Home page</h1>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        This content was rendered on the server.
      </p>
    </div>
  );
}