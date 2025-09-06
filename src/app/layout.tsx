import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500","600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});


export const metadata: Metadata = {
  title: "Divy Shah | Web & Mobile App Developer | Shopify Specialist",
  description: "Portfolio of Divy Shah, a Web and Mobile App Developer specializing in Shopify, Next.js, and Flutter. Experienced in building custom e-commerce solutions, web apps, and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ovo.className} ${outfit.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
