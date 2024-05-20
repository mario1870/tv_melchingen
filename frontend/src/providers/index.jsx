

import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "../components/ui/toaster";

// import ShadnCN-Components
import { Button } from "../components/ui/button";

const ErrorFallback = () => {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button className="mt-4" onClick={handleClick}>
        Refresh
      </Button>
    </div>
  );
};

// Initialize Client for React-Query
const queryClient = new QueryClient();


export const AppProvider = ({ children }) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <BeatLoader color="#36d7b7" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                {process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}
                {children}
                <Toaster />
            </QueryClientProvider>
          </BrowserRouter>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
