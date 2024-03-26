import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "../../components/Navigation/Navigation";
import classNames from "classnames";
import Footer from "../../components/Footer/Footer";
import Locale from 'intl-locale-textinfo-polyfill';
import SubLayout from "./client/layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ONYX",
  description: "Your Source for Premium Kaolinite",
};

export default function RootLayout({ children, params: { locale } }: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {

  const { direction: dir } = new Locale(locale).textInfo;

  return (
    <html lang={locale} dir={dir}>
      <body className={classNames("max-w-full", poppins.className)}>
        <SubLayout params={{ locale }}>
          <Navigation />
        </SubLayout>
        {children}
        <Footer />
      </body>
    </html>
  );
}
