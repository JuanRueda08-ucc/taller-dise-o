import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "Crust Pizza Co. — Made-from-scratch pizzas",
  description: "Home of the Chicago-style thin crust pizza.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoCondensed.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
