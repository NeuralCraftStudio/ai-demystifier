import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OSProvider } from "../OSContext"; // NEW
import ObserverHUD from "@/components/ObserverHUD"; // NEW

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demystifier_OS",
  description: "An open-source, interactive terminal to deconstruct the AI black box.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OSProvider>
          <ObserverHUD />
          {children}
        </OSProvider>
      </body>
    </html>
  );
}