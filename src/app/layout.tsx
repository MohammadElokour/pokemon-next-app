import "./globals.css";
import Header from "@src/components/header";
import Footer from "@src/components/footer";
import MainContainer from "@src/components/main-container";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokémon Next App",
  description: "Example UI for Pokemon API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-screen-xl min-h-screen mx-auto overflow-hidden px-5 flex flex-col gap-2 sm:gap-4 justify-between bg-blue-950`}
      >
        <Header />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </body>
    </html>
  );
}
