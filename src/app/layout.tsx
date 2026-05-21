import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/layout/CursorGlow";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quiet to Quite™ | Leadership Visibility for Quiet Women",
  description:
    "Stop being overlooked. Build strategic visibility on your own terms. Expert coaching for high-performing quiet women ready for the next level.",
  keywords: ["leadership coaching", "quiet women", "executive presence", "visibility strategy", "career advancement"],
  openGraph: {
    title: "Quiet to Quite™ | Leadership Visibility",
    description: "Confidence is overrated. Signal clarity is everything.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-white text-black min-h-screen flex flex-col font-sans selection:bg-purple/20">
        <Header />
        <main className="flex-1 flex flex-col">
          <CursorGlow />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
