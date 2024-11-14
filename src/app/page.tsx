"use client";

import { useAuth } from "@/hooks/useAuth";
import LandingLayout from "./landing/layout";
import DashboardLayout from "./dashboard/layout";
import LandingPage from "./landing/page";
import DashboardPage from "./dashboard/page";

export default function HomePage() {
  const { isLoggedIn } = useAuth();

  return (
    <main className="no-scrollbar overflow-hidden">
      {isLoggedIn ? (
        <DashboardLayout>
          <DashboardPage />
        </DashboardLayout>
      ) : (
        <LandingLayout>
          <LandingPage />
        </LandingLayout>
      )}
    </main>
  );
}
