"use client";
import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type React from "react";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");
  return (
    <div className="flex min-h-screen flex-col">
      {!isStudio && <Header />}
      <main className="flex-1">{children}</main>
      {!isStudio && <Footer />}
    </div>
  );
} 