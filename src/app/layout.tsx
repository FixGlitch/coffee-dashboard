"use client";

import { AuthProvider } from "@/providers/AuthProvider";
import { QueryClientProvider } from "@/providers/QueryClientProvider";
import Loader from "@/components/common/Loader";
import React, { useState, useEffect } from "react";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="no-scrollbar">
      <body className="bg-white dark:bg-black">
        <AppProviders>
          <MainContent>{children}</MainContent>
        </AppProviders>
      </body>
    </html>
  );
}

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <QueryClientProvider>{children}</QueryClientProvider>
    </AuthProvider>
  );
}

function MainContent({ children }: { children?: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <main className="flex flex-col min-h-screen">{children}</main>;
}
