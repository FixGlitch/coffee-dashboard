"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import Footer from "@/features/pages/Landing/Footer";

export default function LandingLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </div>
  );
}

function ContentWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-coffee-50 relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <main className="flex-1 overflow-y-auto no-scrollbar">{children}</main>
    </div>
  );
}
