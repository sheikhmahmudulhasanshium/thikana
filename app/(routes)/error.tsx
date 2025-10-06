// app/(routes)/error.tsx
"use client";

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // This is a good place to log errors to a service in production.
    // For now, we'll just log it to the browser console.
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-semibold text-red-600 mb-2">
          Something went wrong!
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          An unexpected error has occurred. We&apos;ve logged the issue and are looking into it.
        </p>
        
        {/* Simple button styled with Tailwind CSS */}
        <button
          onClick={() => reset()}
          className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}