import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/widgets/navbar/components/NavBarComponent";
import { Player } from "@/features/player";
import { MainLayout } from "@/widgets/mainLayout";


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
