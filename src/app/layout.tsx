import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/widgets/navbar/ui/NavBar";
import { Player } from "@/features/player";
import { Nunito } from "next/font/google";
import { RightSideBar } from "@/features/rightSideBar";

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
    <html lang="en" className={`${nunito.className} antialiased`}>
      <body
        className={`antialiased bg-neutral-800 grid grid-rows-[auto_1fr_auto] h-dvh overflow-hidden`}
      >
        <header>
          <NavBar />
        </header>

        <main className="grid grid-cols-[250px_1fr_300px] h-dvh overflow-hidden">
          <aside className="bg-neutral-900 overflow-auto">

          </aside>
          <div className="overflow-auto bg-neutral-800">
            {children}
          </div>
          <aside className="bg-neutral-900 overflow-auto">
            <RightSideBar />
          </aside>
        </main>

        <Player />
      </body>
    </html>
  );
}
