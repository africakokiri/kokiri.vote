import { Header } from "@/components/Header";
import NextThemesProvider from "@/libs/next-themes/next-themes-provider";
import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "코끼리",
  description: "온라인 여론조사 및 투표 플랫폼",
  icons: {
    icon: "/icons/kokiri.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="h-screen w-screen p-4 antialiased">
        <NextThemesProvider>
          <Header />
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
