import { Inter } from "next/font/google";

import "@/styles/reset.css";
import "@/styles/global.css";

import { Header } from "@/components/header/index";
import { Footer } from "@/components/footer/index";

const interFontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={interFontFamily.className}>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
