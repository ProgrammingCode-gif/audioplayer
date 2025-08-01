import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/widgets/navbar/ui/NavBar";
import { Player } from "@/features/player";
import { Nunito } from "next/font/google";
import { RightSideBar } from "@/features/rightSideBar";
import { MainLayout } from "@/widgets/mainLayout";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Beatify",
  description: "Music app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div
      className={`antialiased bg-black grid grid-rows-[auto_1fr_auto] h-dvh overflow-hidden`}
    >
      <NavBar />
      <MainLayout>{children}</MainLayout>
      <Player />
    </div>
  );
}
