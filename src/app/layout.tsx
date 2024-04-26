import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Home/Navigation";
import Footer from "@/components/Home/Footer";
import { Providers as NextUIProvider } from "./providers";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inconsolata.className}`}>
        <NextUIProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
