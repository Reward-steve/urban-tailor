import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urban Tailor – Custom Fashion for Every Identity",
  description:
    "Discover Urban Tailor – Nigeria's modern fashion brand. Explore custom-made clothing styles for men and women. Elegance meets culture.",
  keywords: [
    "Urban Tailor",
    "Tailor Nigeria",
    "Custom Fashion",
    "African Fashion",
    "Ankara Styles",
    "Nigerian Tailor",
    "Men Suit Nigeria",
    "Native Wears",
    "Women Dresses",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
