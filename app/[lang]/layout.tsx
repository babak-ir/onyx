// import { i18n, type Locale } from "../../i18n-config";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "../../components/Navigation/Navigation";
import classNames from "classnames";
import Footer from "../../components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ONYX",
  description: "Your Source for Premium Kaolinite",
};

export default function RootLayout({ children, params: { locale } }: Readonly<{ children: React.ReactNode; params: { locale: string }; }>) {
  return (
    <html lang={locale}>
      <body className={classNames("max-w-full", poppins.className)}>
        {/* <Navigation /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
