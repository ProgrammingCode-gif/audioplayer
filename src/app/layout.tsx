import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/widgets/navbar/ui/NavBar";
import { Player } from "@/features/player";

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
    <html lang="en">
      <body
        className={`antialiased bg-neutral-800`}
      >
        <NavBar />
        {children}
        <Player />
      </body>
    </html>
  );
}
