import type { Metadata } from "next";
import "@/styles/globals.css";
import { Nunito } from "next/font/google";
import UserInit from "./_providers/UserInit";

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
        className={`antialiased bg-black`}
      >
        <UserInit />
        {children}
      </body>
    </html>
  );
}
