import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Dailymotion for Business | Video Solutions",
  description: "The world's most complete and easy-to-use video marketing suite. Unifying Dailymotion Pro and Dailymotion Advertising.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-rich-black text-mist-white selection:bg-electric-blue/30 selection:text-electric-blue`}
      >
        {children}
      </body>
    </html>
  );
}
