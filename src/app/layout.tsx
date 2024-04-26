import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Home/Navigation";
import Footer from "@/components/Home/Footer";
import { Providers as NextUIProvider } from "./providers";
import Image from "next/image";
import background from "@/assets/images/background.jpeg";

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
          <header className="fixed top-0 z-50 w-screen">
            <Navigation />
          </header>
          <div className="fixed top-0 -z-10 h-screen w-screen">
            <Image
              src={background}
              alt="background"
              className="h-full w-full object-cover object-center opacity-10"
            />
          </div>
          <main className="container mx-auto max-w-screen-2xl px-6 pt-[64px]">
            {children}
            <Footer />
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
