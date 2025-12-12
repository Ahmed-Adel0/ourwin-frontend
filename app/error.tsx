"use client";

import { useEffect } from "react";
import Link from "next/link";
import logger from "../lib/logger";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    logger.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-accent mb-4">500</h1>
          <h2 className="text-2xl font-bold text-white mb-4">
            Something went wrong!
          </h2>
          <p className="text-gray-400 mb-8">
            We&apos;re sorry, but something unexpected happened. Please try
            again.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-accent text-dark-teal font-semibold rounded-lg hover:bg-accent-dark transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-dark-teal text-white font-semibold rounded-lg hover:bg-dark-teal-light transition-colors border border-accent/30"
          >
            Go home
          </Link>
        </div>

        {process.env.NODE_ENV === "development" && error.message && (
          <div className="mt-8 p-4 bg-dark-bg border border-accent/20 rounded-lg text-left">
            <p className="text-xs text-gray-500 mb-2">
              Error details (dev only):
            </p>
            <p className="text-sm text-red-400 font-mono">{error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
