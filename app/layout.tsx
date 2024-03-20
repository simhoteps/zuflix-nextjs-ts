import { Inter } from "next/font/google";

import "styles/reset.css";
import "styles/global.css";

import { Footer } from "components/footer";
import { Header } from "components/header";

const interFontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={interFontFamily.className}>
      <body className="appContainer">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
