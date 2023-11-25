import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault: Your Gateway to the Anime Universe",
  description:
    "Embark on an epic anime odyssey with Anime Vault, your one-stop destination for all things anime. Discover a vast collection of anime series, movies, and characters, all meticulously curated for the ultimate anime experience.",
  keywords: [
    "anime",
    " Attack on Titan",
    "Naruto",
    "One Piece",
    "Clannad: After Story",
    "Steins;Gate",
    "Cowboy Bebop",
    "Code Geass",
    "Death Note",
    "Hunter x Hunter",
    "Fullmetal Alchemist: Brotherhood",
    "anime series",
    "anime movies",
    "anime characters",
    "watch anime",
    "anime streaming",
    "anime recommendations",
    "anime news",
    "anime reviews",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
